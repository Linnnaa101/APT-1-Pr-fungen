import { Timer } from './Timer';

export function ExamHeader({ title, submitted, timerKey, onExpired }: ExamHeaderProps) {
  return (
    <header className="exam-header">
      <div>
        <strong>AP Teil 1 – Prüfungssimulation</strong>
        <small>
          {title} · Bearbeitungszeit 90 Minuten · Hilfsmittel: nicht programmierter Taschenrechner ·
          nicht offiziell
        </small>
      </div>
      <Timer storageKey={timerKey} running={!submitted} onExpired={onExpired} />
    </header>
  );
}

type ExamHeaderProps = {
  title: string;
  submitted: boolean;
  timerKey: string;
  onExpired: () => void;
};
