import { tasks, type Task } from './tasks';

export type ExamMode = 'mix' | 'ap1-2026' | 'bw-2023' | 'lf4' | 'vlsm';

export type ExamSession = {
  id: string;
  mode: ExamMode;
  tasks: Task[];
  createdAt: number;
};

export const examLabels: Record<ExamMode, string> = {
  mix: 'Mix-Prüfung',
  'ap1-2026': 'AP1 2026 üben',
  'bw-2023': 'BW Sommer 2023 üben',
  lf4: 'LF4 Lernmodus',
  vlsm: 'VLSM/WiFi Lernmodus',
};

const targetPoints = 100;
const historyKey = 'apt1-task-history';

export function createExam(mode: ExamMode): ExamSession {
  const createdAt = Date.now();

  return {
    id: `${mode}-${createdAt}`,
    mode,
    tasks: selectTasks(mode),
    createdAt,
  };
}

function selectTasks(mode: ExamMode): Task[] {
  if (mode === 'ap1-2026') return tasks.filter((task) => task.source === 'AP1 2026 Aufgaben');
  if (mode === 'bw-2023') return tasks.filter((task) => task.source.includes('BW'));
  if (mode === 'lf4') return tasks.filter((task) => task.source.includes('LF4'));
  if (mode === 'vlsm') return tasks.filter((task) => task.source.includes('VLSM'));

  return selectMixedTasks();
}

function selectMixedTasks(): Task[] {
  const history = readHistory();
  const topics = shuffle([...new Set(tasks.map((task) => task.topic))]);
  const picked: Task[] = [];

  for (const topic of weightedTopics(topics, history)) {
    const candidate = bestCandidateForTopic(topic, picked, history);
    if (candidate) picked.push(candidate);
    if (picked.length === 4) break;
  }

  while (picked.length < 4) {
    const next = bestCandidate(tasks, picked, history, picked);
    if (!next) break;
    picked.push(next);
  }

  const optimized = optimizeForPoints(picked, history);
  rememberTasks(optimized, history);

  return optimized;
}

function weightedTopics(topics: string[], history: Record<string, number>): string[] {
  return topics.sort((a, b) => topicScore(a, history) - topicScore(b, history));
}

function topicScore(topic: string, history: Record<string, number>): number {
  const topicTasks = tasks.filter((task) => task.topic === topic);
  const avgLastUsed =
    topicTasks.reduce((sum, task) => sum + (history[task.id] ?? 0), 0) / Math.max(topicTasks.length, 1);

  return avgLastUsed + Math.random() * 1000;
}

function bestCandidateForTopic(
  topic: string,
  picked: Task[],
  history: Record<string, number>,
): Task | undefined {
  return bestCandidate(
    tasks.filter((task) => task.topic === topic),
    picked,
    history,
    picked,
  );
}

function bestCandidate(
  pool: Task[],
  picked: Task[],
  history: Record<string, number>,
  current: Task[],
): Task | undefined {
  return pool
    .filter((task) => !picked.some((selected) => selected.id === task.id))
    .sort((a, b) => scoreTask(a, current, history) - scoreTask(b, current, history))[0];
}

function scoreTask(task: Task, current: Task[], history: Record<string, number>): number {
  const pointsWithTask = current.reduce((sum, item) => sum + item.points, 0) + task.points;
  const distanceFromTarget = Math.abs(targetPoints - pointsWithTask);
  const lastUsedPenalty = history[task.id] ? history[task.id] / 1_000_000_000 : 0;
  const randomness = Math.random() * 8;

  return distanceFromTarget + lastUsedPenalty + randomness;
}

function optimizeForPoints(picked: Task[], history: Record<string, number>): Task[] {
  let best = picked;
  let bestDistance = Math.abs(sumPoints(best) - targetPoints);

  for (const candidate of tasks) {
    for (let index = 0; index < picked.length; index += 1) {
      if (picked.some((task) => task.id === candidate.id)) continue;

      const replacement = [...picked];
      replacement[index] = candidate;
      const hasUniqueTopics = new Set(replacement.map((task) => task.topic)).size >= 3;
      const distance = Math.abs(sumPoints(replacement) - targetPoints);

      if (hasUniqueTopics && distance < bestDistance && !history[candidate.id]) {
        best = replacement;
        bestDistance = distance;
      }
    }
  }

  return best.slice(0, 4);
}

function sumPoints(selectedTasks: Task[]): number {
  return selectedTasks.reduce((sum, task) => sum + task.points, 0);
}

function rememberTasks(selectedTasks: Task[], history: Record<string, number>): void {
  const now = Date.now();
  const nextHistory = { ...history };

  selectedTasks.forEach((task) => {
    nextHistory[task.id] = now;
  });

  localStorage.setItem(historyKey, JSON.stringify(nextHistory));
}

function readHistory(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(historyKey) ?? '{}') as Record<string, number>;
  } catch {
    return {};
  }
}

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}
