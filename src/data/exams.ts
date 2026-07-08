import { tasks, type Task } from './tasks';
export type ExamMode = 'mix' | 'ap1-2026' | 'bw-2023' | 'lf4' | 'vlsm';
export const examLabels: Record<ExamMode, string> = { mix: 'Mix-Prüfung', 'ap1-2026': 'AP1 2026 üben', 'bw-2023': 'BW Sommer 2023 üben', lf4: 'LF4 Lernmodus', vlsm: 'VLSM/WiFi Lernmodus' };
export function createExam(mode: ExamMode): Task[] {
  if (mode === 'ap1-2026') return tasks.filter(t => t.source === 'AP1 2026 Aufgaben');
  if (mode === 'bw-2023') return tasks.filter(t => t.source.includes('BW'));
  if (mode === 'lf4') return tasks.filter(t => t.source.includes('LF4'));
  if (mode === 'vlsm') return tasks.filter(t => t.source.includes('VLSM'));
  const history = JSON.parse(localStorage.getItem('apt1-task-history') ?? '{}') as Record<string, number>;
  const topics = [...new Set(tasks.map(t => t.topic))];
  const picked: Task[] = [];
  for (const topic of topics) {
    const candidate = tasks.filter(t => t.topic === topic && !picked.includes(t)).sort((a,b)=>(history[a.id]??0)-(history[b.id]??0))[0];
    if (candidate) picked.push(candidate);
    if (picked.length === 4) break;
  }
  while (picked.length < 4) picked.push(tasks.filter(t => !picked.includes(t)).sort((a,b)=>(history[a.id]??0)-(history[b.id]??0))[0]);
  const now = Date.now(); picked.forEach(t => history[t.id] = now); localStorage.setItem('apt1-task-history', JSON.stringify(history));
  return picked;
}
