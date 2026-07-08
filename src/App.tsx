import { useState } from 'react';
import { createExam, examLabels, type ExamMode, type ExamSession } from './data/exams';
import { ExamShell } from './components/ExamShell';
import './styles/exam.css';

const modes: ExamMode[] = ['mix', 'ap1-2026', 'bw-2023', 'lf4', 'vlsm'];

export default function App() {
  const [exam, setExam] = useState<ExamSession | null>(null);

  if (exam) {
    return <ExamShell session={exam} onBack={() => setExam(null)} />;
  }

  return (
    <main className="start-page">
      <section className="start-card">
        <h1>AP Teil 1 – Prüfungssimulation</h1>
        <p>
          Private Lern- und Prüfungssimulation für Fachinformatiker
          Anwendungsentwicklung/Systemintegration. Keine offizielle Prüfungssoftware.
        </p>
        <ul>
          <li>Bearbeitungszeit: 90 Minuten</li>
          <li>Hilfsmittel: nicht programmierter Taschenrechner</li>
          <li>Alle Aufgaben bearbeiten</li>
          <li>Aufgaben sind als HTML-Strukturen nachgebaut, nicht als PDF-Seiten eingebettet.</li>
        </ul>
        <div className="mode-grid">
          {modes.map((mode) => (
            <button key={mode} type="button" onClick={() => setExam(createExam(mode))}>
              {examLabels[mode]}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
