import type { Task } from './tasks';

export type SolutionPart = {
  taskId: string;
  partId: string;
  text: string;
};

export const solutions: SolutionPart[] = [
  {
    taskId: 'ap1-2026-1',
    partId: 'p1',
    text: 'Ja, wenn ein PoE-fähiger Port 1-4 genutzt wird: Kamera fordert IEEE 802.3af, der Switch unterstützt 802.3af/at.',
  },
  {
    taskId: 'ap1-2026-1',
    partId: 'p2',
    text: '3840 × 2160 × 24 Bit × 25/s = 4.976.640.000 Bit/s ≈ 4,98 Gbit/s unkomprimiert.',
  },
  {
    taskId: 'ap1-2026-1',
    partId: 'p4',
    text: 'Daisy-Chaining ist bei einer Kamera mit einem RJ45-Port normalerweise nicht vorgesehen. Alternative: Switch mit ausreichend PoE-Ports.',
  },
  {
    taskId: 'ap1-2026-2',
    partId: 'p1',
    text: 'Bei /27: Netz 192.168.10.32, erster Host .33, letzter Host .62, Broadcast .63.',
  },
  {
    taskId: 'ap1-2026-2',
    partId: 'p2',
    text: 'Client A liegt im Netz 192.168.10.32/27, der Server mit .70 liegt im Netz 192.168.10.64/27.',
  },
  {
    taskId: 'ap1-2026-3',
    partId: 'p2',
    text: '10.12.4.25 ist privat, da 10.0.0.0/8 nach RFC1918 für private Netze reserviert ist.',
  },
  {
    taskId: 'ap1-2026-3',
    partId: 'p4',
    text: 'Beispiele: Change Request erfassen, Risiko/Auswirkung bewerten, Freigabe einholen, Umsetzung planen, testen, dokumentieren.',
  },
  {
    taskId: 'ap1-2026-4',
    partId: 'p2',
    text: 'Wenn Bestellwert >= 100 dann 0; sonst nach Gewicht: <=5 kg 4,90, <=20 kg 9,90, sonst 29,90.',
  },
  {
    taskId: 'ap1-2026-4',
    partId: 'p3',
    text: '82,50 € liegt unter 100 €, 7,2 kg liegt über 5 kg und bis 20 kg: Versandkosten 9,90 €.',
  },
];

export const solutionFor = (task: Task, partId: string) =>
  solutions.find((solution) => solution.taskId === task.id && solution.partId === partId)?.text ??
  'Musterlösung individuell prüfen; Punkte nach fachlicher Vollständigkeit vergeben.';
