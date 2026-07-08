import type { Task } from './tasks';
export type SolutionPart = { taskId: string; partId: string; text: string };
export const solutions: SolutionPart[] = [
  { taskId: 'ap1-2026-1', partId: 'p1', text: 'Erfüllt: CPU, RAM, SSD und Netzwerk erreichen oder übertreffen die Mindestanforderungen.' },
  { taskId: 'ap1-2026-1', partId: 'p2', text: 'Beispiele: Monitor auf Augenhöhe, verstellbarer Stuhl, blendfreie Aufstellung.' },
  { taskId: 'ap1-2026-1', partId: 'p3', text: '1.309,00 € / 1,19 = 1.100,00 € netto.' },
  { taskId: 'ap1-2026-2', partId: 'p1', text: '/26, 255.255.255.192, 62 nutzbare Hosts.' },
  { taskId: 'ap1-2026-2', partId: 'p2', text: '192.168.40.0, 192.168.40.1, 192.168.40.62, 192.168.40.63.' },
  { taskId: 'ap1-2026-3', partId: 'p2', text: 'Nur Daten erheben, die für den Zweck erforderlich sind, z. B. keine Geburtsdaten ohne Bedarf.' },
  { taskId: 'ap1-2026-4', partId: 'p3', text: 'Suche aktive Ausleihe zum Gerät. Wenn keine offene Rückgabe existiert, ist das Gerät verfügbar.' }
];
export const solutionFor = (task: Task, partId: string) => solutions.find(s => s.taskId === task.id && s.partId === partId)?.text ?? 'Musterlösung individuell prüfen; Punkte nach fachlicher Vollständigkeit vergeben.';
