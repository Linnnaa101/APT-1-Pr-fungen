import { useCallback, useEffect, useState } from 'react';
import { examLabels, type ExamSession } from '../data/exams';
import { ExamHeader } from './ExamHeader';
import { NavigationPanel } from './NavigationPanel';
import { SelfAssessment } from './SelfAssessment';
import { TaskCard } from './TaskCard';

export function ExamShell({ session, onBack }: ExamShellProps) {
  const sessionKey = `apt1-session-${session.id}`;
  const answersKey = `${sessionKey}-answers`;
  const submittedKey = `${sessionKey}-submitted`;
  const timerKey = `${sessionKey}-time-left`;

  const [answers, setAnswers] = useState<Record<string, string>>(() => readJson(answersKey));
  const [submitted, setSubmitted] = useState(() => localStorage.getItem(submittedKey) === 'true');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    localStorage.setItem(answersKey, JSON.stringify(answers));
  }, [answers, answersKey]);

  const finishExam = useCallback(() => {
    setSubmitted(true);
    localStorage.setItem(submittedKey, 'true');
  }, [submittedKey]);

  const submit = () => {
    if (window.confirm('Prüfung wirklich abgeben? Danach werden Lösungen angezeigt.')) {
      finishExam();
    }
  };

  const reset = () => {
    localStorage.removeItem(answersKey);
    localStorage.removeItem(submittedKey);
    localStorage.removeItem(timerKey);
    window.location.reload();
  };

  const setAnswer = (key: string, value: string) => {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [key]: value }));
  };

  const showSolutions = submitted || session.mode === 'lf4' || session.mode === 'vlsm';

  return (
    <div className="exam-page">
      <ExamHeader
        title={examLabels[session.mode]}
        submitted={submitted}
        timerKey={timerKey}
        onExpired={finishExam}
      />
      <div className="exam-layout">
        <NavigationPanel tasks={session.tasks} current={current} />
        <main>
          {session.tasks.map((task, index) => (
            <div key={task.id} onMouseEnter={() => setCurrent(index)}>
              <TaskCard
                task={task}
                index={index}
                answers={answers}
                setAnswer={setAnswer}
                showSolutions={showSolutions}
              />
            </div>
          ))}
          {submitted && <SelfAssessment tasks={session.tasks} />}
          <div className="exam-actions">
            <button type="button" onClick={() => localStorage.setItem(answersKey, JSON.stringify(answers))}>
              Zwischenspeichern
            </button>
            <button type="button" onClick={onBack}>
              Fortsetzen/Startseite
            </button>
            <button type="button" onClick={reset}>
              Zurücksetzen
            </button>
            {!submitted && (
              <button className="primary" type="button" onClick={submit}>
                Abgeben
              </button>
            )}
          </div>
        </main>
        <aside className="correction-margin">Korrekturrand</aside>
      </div>
    </div>
  );
}

type ExamShellProps = {
  session: ExamSession;
  onBack: () => void;
};

function readJson(key: string): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '{}') as Record<string, string>;
  } catch {
    return {};
  }
}
