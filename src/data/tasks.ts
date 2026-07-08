export type AnswerType = 'lined' | 'textarea' | 'table' | 'calculation' | 'multiple-choice' | 'diagram' | 'uml' | 'code' | 'network';

export type TableDefinition = { headers: string[]; rows: string[][]; answerColumns?: number[] };
export type Attachment = { id: string; title: string; type: 'text' | 'table' | 'image' | 'diagram'; content: unknown };
export type TaskPart = { id: string; label: string; text: string; points: number; answerType: AnswerType; rows?: number; table?: TableDefinition; choices?: string[] };
export type Task = { id: string; source: string; examYear?: string; title: string; topic: string; points: number; estimatedMinutes?: number; intro?: string; parts: TaskPart[]; attachments?: Attachment[] };

export const tasks: Task[] = [
  {
    id: 'ap1-2026-1', source: 'AP1 2026 Aufgaben', examYear: '2026', title: 'Arbeitsplatz und Hardware beschaffen', topic: 'Hardware/Arbeitsplatz', points: 25, estimatedMinutes: 22,
    intro: 'Ein Ausbildungsbetrieb richtet einen neuen Arbeitsplatz für Softwareentwicklung und Support ein. Die Anforderungen sind zu prüfen und nachvollziehbar zu dokumentieren.',
    attachments: [{ id: 'a1', title: 'Anlage 1: Arbeitsplatzanforderungen', type: 'table', content: { headers: ['Komponente','Mindestanforderung','Ist-Angebot'], rows: [['CPU','4 Kerne, Virtualisierung','6 Kerne, Virtualisierung'],['RAM','16 GB','16 GB'],['Massenspeicher','512 GB SSD','1 TB SSD'],['Netzwerk','Gigabit LAN, WLAN','Gigabit LAN, WLAN 6']] } }],
    parts: [
      { id: 'p1', label: '1.1', text: 'Prüfen Sie anhand der Anlage, ob das angebotene System die Mindestanforderungen erfüllt. Begründen Sie Ihre Entscheidung mit drei konkreten Komponenten.', points: 9, answerType: 'lined', rows: 7 },
      { id: 'p2', label: '1.2', text: 'Nennen Sie zwei ergonomische Maßnahmen für den Bildschirmarbeitsplatz und erläutern Sie jeweils den Nutzen.', points: 6, answerType: 'table', table: { headers: ['Maßnahme','Nutzen'], rows: [['',''],['','']], answerColumns: [0,1] } },
      { id: 'p3', label: '1.3', text: 'Berechnen Sie den Nettopreis, wenn der Bruttopreis 1.309,00 € inklusive 19 % Umsatzsteuer beträgt. Geben Sie den Rechenweg an.', points: 5, answerType: 'calculation', rows: 4 },
      { id: 'p4', label: '1.4', text: 'Ordnen Sie die folgenden Schnittstellen einem typischen Einsatzzweck zu: HDMI, USB-C, RJ45.', points: 5, answerType: 'table', table: { headers: ['Schnittstelle','Einsatzzweck'], rows: [['HDMI',''],['USB-C',''],['RJ45','']], answerColumns: [1] } }
    ]
  },
  {
    id: 'ap1-2026-2', source: 'AP1 2026 Aufgaben', examYear: '2026', title: 'Netzwerk, IP-Adressierung und WLAN', topic: 'Netzwerk/IP/Subnetting/WLAN', points: 25, estimatedMinutes: 24,
    intro: 'Für einen Schulungsraum soll ein logisch getrenntes Netz geplant werden. Das Ausgangsnetz lautet 192.168.40.0/24.',
    attachments: [{ id: 'net1', title: 'Anlage 2: Netzskizze', type: 'diagram', content: 'Internet -- Router -- Switch -- Clients; Access Point am Switch; Server im Technikraum' }],
    parts: [
      { id: 'p1', label: '2.1', text: 'Ermitteln Sie für ein Subnetz mit mindestens 50 Hosts eine passende CIDR-Notation, Subnetzmaske und die Anzahl nutzbarer Hostadressen.', points: 8, answerType: 'table', table: { headers: ['CIDR','Subnetzmaske','nutzbare Hosts'], rows: [['','','']], answerColumns: [0,1,2] } },
      { id: 'p2', label: '2.2', text: 'Nennen Sie Netzadresse, ersten Host, letzten Host und Broadcastadresse für das erste passende Subnetz.', points: 8, answerType: 'table', table: { headers: ['Netzadresse','1. Host','Letzter Host','Broadcast'], rows: [['','','','']], answerColumns: [0,1,2,3] } },
      { id: 'p3', label: '2.3', text: 'Beschreiben Sie zwei Sicherheitsmaßnahmen für das WLAN im Schulungsraum.', points: 5, answerType: 'lined', rows: 5 },
      { id: 'p4', label: '2.4', text: 'Skizzieren Sie eine sinnvolle Platzierung von Router, Switch, Access Point und Clients.', points: 4, answerType: 'network', rows: 6 }
    ]
  },
  {
    id: 'ap1-2026-3', source: 'AP1 2026 Aufgaben', examYear: '2026', title: 'Datenschutz und Informationssicherheit', topic: 'Datenschutz/Informationssicherheit', points: 25, estimatedMinutes: 21,
    intro: 'Eine Anwendung verarbeitet Kundendaten. Bei der Planung müssen Datenschutz, Rollen und technische Schutzmaßnahmen berücksichtigt werden.',
    parts: [
      { id: 'p1', label: '3.1', text: 'Unterscheiden Sie personenbezogene Daten und anonyme Daten anhand je eines Beispiels aus dem Anwendungskontext.', points: 6, answerType: 'table', table: { headers: ['Begriff','Beispiel','Begründung'], rows: [['personenbezogene Daten','',''],['anonyme Daten','','']], answerColumns: [1,2] } },
      { id: 'p2', label: '3.2', text: 'Erklären Sie das Prinzip der Datenminimierung und nennen Sie eine konkrete Umsetzung in einem Registrierungsformular.', points: 6, answerType: 'lined', rows: 5 },
      { id: 'p3', label: '3.3', text: 'Bewerten Sie die folgenden Maßnahmen hinsichtlich Vertraulichkeit, Integrität oder Verfügbarkeit: Passwort-Hashing, Backups, Prüfsummen.', points: 6, answerType: 'table', table: { headers: ['Maßnahme','Schutzziel','Kurzbegründung'], rows: [['Passwort-Hashing','',''],['Backups','',''],['Prüfsummen','','']], answerColumns: [1,2] } },
      { id: 'p4', label: '3.4', text: 'Nennen Sie zwei Rechte betroffener Personen nach DSGVO.', points: 4, answerType: 'lined', rows: 3 },
      { id: 'p5', label: '3.5', text: 'Formulieren Sie eine kurze Empfehlung für den Umgang mit Rollen und Berechtigungen.', points: 3, answerType: 'textarea', rows: 4 }
    ]
  },
  {
    id: 'ap1-2026-4', source: 'AP1 2026 Aufgaben', examYear: '2026', title: 'Datenmodellierung und Programmablauf', topic: 'Datenbanken/Datenmodellierung', points: 25, estimatedMinutes: 23,
    intro: 'Für eine Geräteausleihe sollen Daten gespeichert und ein einfacher Ablauf beschrieben werden.',
    attachments: [{ id: 'db1', title: 'Anlage 3: Fachliches Szenario', type: 'text', content: 'Mitarbeitende können Geräte ausleihen. Ein Gerät kann mehrfach ausgeliehen werden, aber zu einem Zeitpunkt nur eine aktive Ausleihe besitzen.' }],
    parts: [
      { id: 'p1', label: '4.1', text: 'Entwerfen Sie drei Tabellen mit Primär- und Fremdschlüsseln für Mitarbeitende, Geräte und Ausleihen.', points: 9, answerType: 'table', table: { headers: ['Tabelle','Attribute inkl. Schlüssel'], rows: [['',''],['',''],['','']], answerColumns: [0,1] } },
      { id: 'p2', label: '4.2', text: 'Beschreiben Sie die Beziehung zwischen Gerät und Ausleihe inklusive Kardinalität.', points: 5, answerType: 'lined', rows: 4 },
      { id: 'p3', label: '4.3', text: 'Formulieren Sie Pseudocode, der prüft, ob ein Gerät aktuell verfügbar ist.', points: 7, answerType: 'code', rows: 8 },
      { id: 'p4', label: '4.4', text: 'Nennen Sie zwei Vorteile einer Normalisierung der Datenbank.', points: 4, answerType: 'lined', rows: 4 }
    ]
  },
  { id: 'bw-2023-1', source: 'BW APT1 Sommer 2023 Aufgaben', examYear: '2023', title: 'Prozesse im IT-Service', topic: 'Organisation/Prozesse/Recht', points: 20, intro: 'Ein Supportprozess soll verbessert werden.', parts: [{ id: 'p1', label: '1.1', text: 'Beschreiben Sie vier Schritte eines Ticketprozesses.', points: 20, answerType: 'lined', rows: 10 }] },
  { id: 'lf4-1', source: 'APT1 - LF4 Prüfungsvorbereitung', title: 'UML-Klassendiagramm', topic: 'Programmierung/Pseudocode/UML', points: 20, intro: 'Ein Klassendiagramm soll aus einem Text abgeleitet werden.', parts: [{ id: 'p1', label: '1.1', text: 'Skizzieren Sie Klassen, Attribute und Beziehungen für Kunde, Auftrag und Position.', points: 20, answerType: 'uml', rows: 10 }] },
  { id: 'vlsm-1', source: 'PV_APT1 - Weitere Übungsaufgaben uGV WiFi VLSM Loesung', title: 'VLSM-Planung', topic: 'Netzwerk/IP/Subnetting/WLAN', points: 20, intro: 'Planen Sie Subnetze variabler Länge.', parts: [{ id: 'p1', label: '1.1', text: 'Teilen Sie 10.0.0.0/24 für 100, 50 und 20 Hosts auf.', points: 20, answerType: 'table', table: { headers: ['Bereich','CIDR','Netz','Broadcast'], rows: [['100 Hosts','','',''],['50 Hosts','','',''],['20 Hosts','','','']], answerColumns: [1,2,3] } }] }
];
