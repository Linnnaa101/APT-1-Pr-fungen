export type AnswerType =
  | 'lined'
  | 'textarea'
  | 'table'
  | 'calculation'
  | 'multiple-choice'
  | 'diagram'
  | 'uml'
  | 'code'
  | 'network';

export type TableDefinition = {
  headers: string[];
  rows: string[][];
  answerColumns?: number[];
};

export type Attachment = {
  id: string;
  title: string;
  type: 'text' | 'table' | 'image' | 'diagram';
  content: unknown;
};

export type TaskPart = {
  id: string;
  label: string;
  text: string;
  points: number;
  answerType: AnswerType;
  rows?: number;
  table?: TableDefinition;
  choices?: string[];
};

export type Task = {
  id: string;
  source: string;
  examYear?: string;
  title: string;
  topic: string;
  points: number;
  estimatedMinutes?: number;
  intro?: string;
  parts: TaskPart[];
  attachments?: Attachment[];
};

export const tasks: Task[] = [
  {
    id: 'ap1-2026-1',
    source: 'AP1 2026 Aufgaben',
    examYear: '2026',
    title: 'Kamera, Arbeitsplatz und Datenübertragung',
    topic: 'Hardware/Arbeitsplatz',
    points: 25,
    estimatedMinutes: 22,
    intro:
      'Für einen Kunden soll eine 4K-Überwachungskamera an einem Netzwerkanschluss geplant werden. Prüfen Sie technische Daten, Stromversorgung, Schnittstellen und Bandbreiten.',
    attachments: [
      {
        id: 'cam-spec',
        title: 'Anlage 1: Auszug technische Spezifikation Kamera',
        type: 'table',
        content: {
          headers: ['Merkmal', 'Angabe'],
          rows: [
            ['Auflösung', '3840 × 2160 Pixel bei 25 fps'],
            ['Video-Kompression', 'H.265 / H.264, variable Bitrate'],
            ['Netzwerk', 'RJ45, 10/100 Mbit/s Ethernet'],
            ['Stromversorgung', 'PoE nach IEEE 802.3af oder 12 V DC'],
            ['Anschlüsse', 'RJ45, Audio In/Out, microSD, Reset-Taster'],
            ['Leistungsaufnahme', 'max. 8,5 W'],
          ],
        },
      },
      {
        id: 'cam-switch',
        title: 'Anlage 2: Switch-Auszug',
        type: 'table',
        content: {
          headers: ['Port', 'PoE-Klasse', 'max. Leistung', 'Bemerkung'],
          rows: [
            ['1-4', '802.3af/at', '30 W je Port', 'PoE aktivierbar'],
            ['5-8', '-', '-', 'nur Daten'],
            ['PoE-Budget gesamt', '-', '60 W', 'für alle PoE-Ports zusammen'],
          ],
        },
      },
    ],
    parts: [
      { id: 'p1', label: '1.1', text: 'Prüfen Sie anhand der Spezifikation, ob die Kamera über den vorhandenen Switch per PoE versorgt werden kann. Begründen Sie mit Standard, Portbereich und Leistungsaufnahme.', points: 5, answerType: 'lined', rows: 5 },
      { id: 'p2', label: '1.2', text: 'Berechnen Sie die unkomprimierte Datenrate des Videostreams bei 3840 × 2160 Pixel, 24 Bit Farbtiefe und 25 Bildern pro Sekunde. Geben Sie das Ergebnis in Gbit/s an.', points: 6, answerType: 'calculation', rows: 6 },
      { id: 'p3', label: '1.3', text: 'Erläutern Sie zwei Gründe, warum die reale Netzwerkdatenrate bei H.265 deutlich kleiner als die berechnete unkomprimierte Datenrate sein kann.', points: 4, answerType: 'table', table: { headers: ['Grund', 'Erläuterung'], rows: [['', ''], ['', '']], answerColumns: [0, 1] } },
      { id: 'p4', label: '1.4', text: 'Ordnen Sie die Anschlüsse der Kamera einem fachlich passenden Einsatzzweck zu.', points: 4, answerType: 'table', table: { headers: ['Anschluss', 'Einsatzzweck'], rows: [['RJ45', ''], ['Audio In/Out', ''], ['microSD', ''], ['Reset-Taster', '']], answerColumns: [1] } },
      { id: 'p5', label: '1.5', text: 'Skizzieren Sie eine sinnvolle Verkabelung vom Netzwerkschrank bis zur Kamera. Berücksichtigen Sie Patchpanel, PoE-Switch, Patchkabel und Installationskabel.', points: 6, answerType: 'network', rows: 8 },
    ],
  },
  {
    id: 'ap1-2026-2',
    source: 'AP1 2026 Aufgaben',
    examYear: '2026',
    title: 'IP-Adresse, Netzmaske und Protokollanalyse',
    topic: 'Netzwerk/IP/Subnetting/WLAN',
    points: 25,
    estimatedMinutes: 23,
    intro: 'Ein Client erreicht einen Server nicht zuverlässig. Analysieren Sie IP-Konfiguration, Netzmaske, Gateway und Diagnoseausgaben.',
    attachments: [
      { id: 'ipconfig', title: 'Anlage 3: Auszug Netzwerkkonfiguration', type: 'table', content: { headers: ['System', 'IPv4-Adresse', 'Subnetzmaske', 'Gateway'], rows: [['Client A', '192.168.10.37', '255.255.255.224', '192.168.10.33'], ['Server', '192.168.10.70', '255.255.255.224', '192.168.10.65'], ['Drucker', '192.168.10.54', '255.255.255.224', '192.168.10.33']] } },
      { id: 'ping', title: 'Anlage 4: Diagnoseauszug', type: 'text', content: 'ping 192.168.10.70: Zeitüberschreitung. ping 192.168.10.33: Antwort <1 ms. tracert 192.168.10.70: erster Hop 192.168.10.33, danach keine Antwort.' },
    ],
    parts: [
      { id: 'p1', label: '2.1', text: 'Bestimmen Sie Netzadresse, ersten Host, letzten Host und Broadcastadresse für Client A.', points: 6, answerType: 'table', table: { headers: ['Netzadresse', '1. Host', 'Letzter Host', 'Broadcast'], rows: [['', '', '', '']], answerColumns: [0, 1, 2, 3] } },
      { id: 'p2', label: '2.2', text: 'Analysieren Sie, warum Client A den Server nicht direkt im lokalen Netz erreicht. Beziehen Sie Netzmaske und Subnetzgrenzen ein.', points: 5, answerType: 'lined', rows: 5 },
      { id: 'p3', label: '2.3', text: 'Nennen Sie eine korrigierte IPv4-Konfiguration, mit der Client, Server und Drucker im selben Subnetz liegen können.', points: 5, answerType: 'table', table: { headers: ['IPv4-Adresse Client', 'Subnetzmaske', 'Gateway', 'Begründung'], rows: [['', '', '', '']], answerColumns: [0, 1, 2, 3] } },
      { id: 'p4', label: '2.4', text: 'Vergleichen Sie IPv4 und IPv6 anhand von Adresslänge, Schreibweise und einem praktischen Vorteil von IPv6.', points: 5, answerType: 'table', table: { headers: ['Kriterium', 'IPv4', 'IPv6'], rows: [['Adresslänge', '', ''], ['Schreibweise', '', ''], ['Vorteil', '', '']], answerColumns: [1, 2] } },
      { id: 'p5', label: '2.5', text: 'Nennen Sie zwei weitere Diagnosebefehle oder Prüfungen, mit denen Sie den Fehler eingrenzen.', points: 4, answerType: 'lined', rows: 4 },
    ],
  },
  {
    id: 'ap1-2026-3',
    source: 'AP1 2026 Aufgaben',
    examYear: '2026',
    title: 'Videoerfassung, Lagerlogistik und Betrieb',
    topic: 'Organisation/Prozesse/Recht',
    points: 25,
    estimatedMinutes: 22,
    intro: 'In einem Lager wird eine Anwendung zur Videoerfassung und Kommissionierung eingeführt. Der Betrieb soll organisatorisch, rechtlich und technisch abgesichert werden.',
    attachments: [
      { id: 'warehouse', title: 'Anlage 5: Ping-Auswertung Lager-Client', type: 'table', content: { headers: ['Ziel', 'Ergebnis'], rows: [['10.12.4.1 Gateway', '4 gesendet, 4 empfangen, 0 % Verlust'], ['10.12.4.25 Kameraserver', '4 gesendet, 0 empfangen, 100 % Verlust'], ['8.8.8.8 Internet', 'Zielnetz nicht erreichbar']] } },
      { id: 'privacy', title: 'Anlage 6: Betriebsvereinbarung Auszug', type: 'text', content: 'Videoaufnahmen dienen der Prozesskontrolle. Eine Leistungs- und Verhaltenskontrolle einzelner Beschäftigter ist nicht vorgesehen. Speicherfrist: 72 Stunden.' },
    ],
    parts: [
      { id: 'p1', label: '3.1', text: 'Beschreiben Sie zwei Vorteile der Videoerfassung für die Lagerlogistik und nennen Sie jeweils ein mögliches Risiko.', points: 5, answerType: 'table', table: { headers: ['Vorteil', 'Risiko'], rows: [['', ''], ['', '']], answerColumns: [0, 1] } },
      { id: 'p2', label: '3.2', text: 'Begründen Sie, ob die Adresse 10.12.4.25 eine private IPv4-Adresse ist.', points: 3, answerType: 'lined', rows: 4 },
      { id: 'p3', label: '3.3', text: 'Werten Sie die Ping-Ergebnisse aus und nennen Sie zwei naheliegende Fehlerursachen.', points: 5, answerType: 'lined', rows: 5 },
      { id: 'p4', label: '3.4', text: 'Nennen Sie vier Schritte eines Change-Management-Prozesses für die Einführung der Videoerfassung.', points: 6, answerType: 'table', table: { headers: ['Schritt', 'Kurzbeschreibung'], rows: [['', ''], ['', ''], ['', ''], ['', '']], answerColumns: [0, 1] } },
      { id: 'p5', label: '3.5', text: 'Leiten Sie drei Datenschutz- oder Mitbestimmungsmaßnahmen aus der Anlage ab.', points: 4, answerType: 'lined', rows: 5 },
      { id: 'p6', label: '3.6', text: 'Nennen Sie zwei ergonomische Maßnahmen für Mitarbeitende mit mobilen Scannern oder Monitorarbeitsplätzen.', points: 2, answerType: 'lined', rows: 3 },
    ],
  },
  {
    id: 'ap1-2026-4',
    source: 'AP1 2026 Aufgaben',
    examYear: '2026',
    title: 'OOP, ShippingCalculator und Datenmodell',
    topic: 'Programmierung/Pseudocode/UML',
    points: 25,
    estimatedMinutes: 23,
    intro: 'Für einen Webshop soll der Versandpreis berechnet und ein Datenmodell für Bestellungen entworfen werden.',
    attachments: [
      { id: 'shipping-rules', title: 'Anlage 7: Versandregeln', type: 'table', content: { headers: ['Bedingung', 'Preis'], rows: [['Bestellwert ab 100,00 €', '0,00 €'], ['Gewicht bis 5 kg', '4,90 €'], ['Gewicht über 5 kg bis 20 kg', '9,90 €'], ['Gewicht über 20 kg', 'Spedition, 29,90 €']] } },
      { id: 'order-data', title: 'Anlage 8: Beispielbestellung', type: 'table', content: { headers: ['Feld', 'Wert'], rows: [['Kunde', 'Müller GmbH'], ['Bestellwert', '82,50 €'], ['Gewicht', '7,2 kg'], ['Positionen', '3']] } },
    ],
    parts: [
      { id: 'p1', label: '4.1', text: 'Entwerfen Sie eine Klasse ShippingCalculator mit geeigneten Attributen/Methoden oder beschreiben Sie diese in UML-Notation.', points: 5, answerType: 'uml', rows: 7 },
      { id: 'p2', label: '4.2', text: 'Formulieren Sie Pseudocode für die Berechnung der Versandkosten anhand der Versandregeln.', points: 7, answerType: 'code', rows: 9 },
      { id: 'p3', label: '4.3', text: 'Berechnen Sie die Versandkosten für die Beispielbestellung und begründen Sie die Auswahl der Regel.', points: 4, answerType: 'calculation', rows: 4 },
      { id: 'p4', label: '4.4', text: 'Skizzieren Sie ein ER-Diagramm für Kunde, Bestellung, Bestellposition und Artikel inklusive Kardinalitäten.', points: 6, answerType: 'diagram', rows: 9 },
      { id: 'p5', label: '4.5', text: 'Nennen Sie drei Testfälle für die Versandkostenberechnung inklusive erwartetem Ergebnis.', points: 3, answerType: 'table', table: { headers: ['Bestellwert', 'Gewicht', 'Erwartete Versandkosten'], rows: [['', '', ''], ['', '', ''], ['', '', '']], answerColumns: [0, 1, 2] } },
    ],
  },
  {
    id: 'bw-2023-1',
    source: 'BW APT1 Sommer 2023 Aufgaben',
    examYear: '2023',
    title: 'Serviceannahme und Ticketbearbeitung',
    topic: 'Organisation/Prozesse/Recht',
    points: 25,
    intro: 'Ein IT-Dienstleister nimmt Störungen und Serviceanfragen für eine Berufsschule entgegen. Der Ablauf soll prüfungsnah dokumentiert und bewertet werden.',
    attachments: [
      { id: 'sla', title: 'Anlage BW-1: SLA-Auszug', type: 'table', content: { headers: ['Priorität', 'Beispiel', 'Reaktionszeit', 'Lösungsziel'], rows: [['P1', 'Unterrichtsnetz komplett ausgefallen', '30 min', '4 h'], ['P2', 'Fachraum ohne Drucker', '2 h', '1 AT'], ['P3', 'Einzelner Benutzer kann nicht scannen', '1 AT', '3 AT']] } },
    ],
    parts: [
      { id: 'p1', label: '1.1', text: 'Ergänzen Sie die wesentlichen Schritte eines Ticketprozesses von der Meldung bis zum Abschluss.', points: 8, answerType: 'table', table: { headers: ['Schritt', 'Ergebnis/Dokumentation'], rows: [['', ''], ['', ''], ['', ''], ['', '']], answerColumns: [0, 1] } },
      { id: 'p2', label: '1.2', text: 'Ordnen Sie drei Beispielmeldungen einer SLA-Priorität zu und begründen Sie kurz.', points: 7, answerType: 'table', table: { headers: ['Meldung', 'Priorität', 'Begründung'], rows: [['Schulweites WLAN ohne Funktion', '', ''], ['Scanner eines Sekretariats-PCs defekt', '', ''], ['Drucker im Raum 204 nicht erreichbar', '', '']], answerColumns: [1, 2] } },
      { id: 'p3', label: '1.3', text: 'Nennen Sie vier Angaben, die bei der Ticketerfassung zwingend aufgenommen werden sollten.', points: 4, answerType: 'lined', rows: 4 },
      { id: 'p4', label: '1.4', text: 'Formulieren Sie eine kundenfreundliche Rückmeldung zum Abschluss eines Tickets.', points: 6, answerType: 'textarea', rows: 6 },
    ],
  },
  {
    id: 'bw-2023-2',
    source: 'BW APT1 Sommer 2023 Aufgaben',
    examYear: '2023',
    title: 'Beschaffung und Angebotsvergleich',
    topic: 'Hardware/Arbeitsplatz',
    points: 25,
    intro: 'Für einen Fachraum werden neue Arbeitsplätze beschafft. Vergleichen Sie Angebote und leiten Sie eine Empfehlung ab.',
    attachments: [{ id: 'offers', title: 'Anlage BW-2: Angebotsvergleich', type: 'table', content: { headers: ['Kriterium', 'Angebot A', 'Angebot B'], rows: [['CPU', '6 Kerne', '8 Kerne'], ['RAM', '16 GB', '32 GB'], ['SSD', '512 GB', '1 TB'], ['Garantie', '24 Monate Bring-in', '36 Monate Vor-Ort'], ['Preis netto', '720,00 €', '845,00 €']] } }],
    parts: [
      { id: 'p1', label: '2.1', text: 'Berechnen Sie den Bruttopreis für zehn Geräte aus Angebot B bei 19 % Umsatzsteuer.', points: 5, answerType: 'calculation', rows: 4 },
      { id: 'p2', label: '2.2', text: 'Bewerten Sie die Angebote anhand von vier Kriterien.', points: 8, answerType: 'table', table: { headers: ['Kriterium', 'Bewertung A', 'Bewertung B'], rows: [['Leistung', '', ''], ['Speicher', '', ''], ['Service', '', ''], ['Kosten', '', '']], answerColumns: [1, 2] } },
      { id: 'p3', label: '2.3', text: 'Geben Sie eine begründete Beschaffungsempfehlung ab.', points: 6, answerType: 'textarea', rows: 5 },
      { id: 'p4', label: '2.4', text: 'Nennen Sie drei Nachhaltigkeitsaspekte bei der IT-Beschaffung.', points: 6, answerType: 'lined', rows: 5 },
    ],
  },
  {
    id: 'lf4-1',
    source: 'APT1 - LF4 Prüfungsvorbereitung',
    title: 'UML-Klassendiagramm aus Kundenauftrag',
    topic: 'Datenbanken/Datenmodellierung',
    points: 25,
    intro: 'Ein Auftrag besteht aus Positionen. Jede Position verweist auf genau einen Artikel; ein Kunde kann mehrere Aufträge erteilen.',
    parts: [
      { id: 'p1', label: '1.1', text: 'Leiten Sie Klassen mit sinnvollen Attributen für Kunde, Auftrag, Position und Artikel ab.', points: 7, answerType: 'table', table: { headers: ['Klasse', 'Attribute'], rows: [['Kunde', ''], ['Auftrag', ''], ['Position', ''], ['Artikel', '']], answerColumns: [1] } },
      { id: 'p2', label: '1.2', text: 'Skizzieren Sie das UML-Klassendiagramm inklusive Multiplizitäten.', points: 10, answerType: 'uml', rows: 10 },
      { id: 'p3', label: '1.3', text: 'Nennen Sie zwei sinnvolle Methoden und ordnen Sie diese einer Klasse zu.', points: 4, answerType: 'table', table: { headers: ['Klasse', 'Methode', 'Zweck'], rows: [['', '', ''], ['', '', '']], answerColumns: [0, 1, 2] } },
      { id: 'p4', label: '1.4', text: 'Erläutern Sie den Unterschied zwischen Assoziation und Komposition an diesem Beispiel.', points: 4, answerType: 'lined', rows: 4 },
    ],
  },
  {
    id: 'lf4-2',
    source: 'APT1 - LF4 Prüfungsvorbereitung',
    title: 'Normalisierung einer Bestelldatei',
    topic: 'Datenbanken/Datenmodellierung',
    points: 25,
    intro: 'Eine Tabellenkalkulation enthält Bestellungen mit mehrfach vorkommenden Artikeldaten. Daraus soll ein relationales Modell entstehen.',
    attachments: [{ id: 'flat-table', title: 'Anlage LF4-1: Auszug Bestelldatei', type: 'table', content: { headers: ['BestellNr', 'Kunde', 'Artikel1', 'Preis1', 'Artikel2', 'Preis2'], rows: [['4711', 'Müller GmbH', 'Patchkabel', '3,20', 'Switch', '89,00'], ['4712', 'Schmidt KG', 'Access Point', '119,00', '', '']] } }],
    parts: [
      { id: 'p1', label: '2.1', text: 'Benennen Sie zwei Probleme der nicht normalisierten Bestelldatei.', points: 5, answerType: 'lined', rows: 4 },
      { id: 'p2', label: '2.2', text: 'Entwerfen Sie Tabellen bis zur 3. Normalform.', points: 10, answerType: 'table', table: { headers: ['Tabelle', 'Primärschlüssel', 'Fremdschlüssel'], rows: [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], answerColumns: [0, 1, 2] } },
      { id: 'p3', label: '2.3', text: 'Skizzieren Sie die Beziehungen und Kardinalitäten als ER-Modell.', points: 6, answerType: 'diagram', rows: 8 },
      { id: 'p4', label: '2.4', text: 'Formulieren Sie eine SQL-Abfrage, die alle Positionen einer Bestellnummer ausgibt.', points: 4, answerType: 'code', rows: 5 },
    ],
  },
  {
    id: 'vlsm-1',
    source: 'PV_APT1 - Weitere Übungsaufgaben uGV WiFi VLSM Loesung',
    title: 'VLSM-Planung 10.0.0.0/24',
    topic: 'Netzwerk/IP/Subnetting/WLAN',
    points: 25,
    intro: 'Teilen Sie 10.0.0.0/24 mit VLSM für drei Abteilungen und ein Router-Link-Netz auf.',
    parts: [
      { id: 'p1', label: '1.1', text: 'Planen Sie Subnetze für 100, 50, 20 und 2 Hosts. Beginnen Sie mit dem größten Netz.', points: 12, answerType: 'table', table: { headers: ['Bereich', 'Hosts', 'CIDR', 'Netz', '1. Host', 'Letzter Host', 'Broadcast'], rows: [['Verwaltung', '100', '', '', '', '', ''], ['Schulung', '50', '', '', '', '', ''], ['WLAN', '20', '', '', '', '', ''], ['Router-Link', '2', '', '', '', '', '']], answerColumns: [2, 3, 4, 5, 6] } },
      { id: 'p2', label: '1.2', text: 'Begründen Sie, warum die Netze in absteigender Hostanzahl vergeben werden.', points: 4, answerType: 'lined', rows: 4 },
      { id: 'p3', label: '1.3', text: 'Berechnen Sie die Anzahl nutzbarer Hosts für /25, /26, /27 und /30.', points: 5, answerType: 'table', table: { headers: ['CIDR', 'Nutzbare Hosts'], rows: [['/25', ''], ['/26', ''], ['/27', ''], ['/30', '']], answerColumns: [1] } },
      { id: 'p4', label: '1.4', text: 'Skizzieren Sie eine Router-on-a-stick-Anbindung der Subnetze mit VLAN-IDs.', points: 4, answerType: 'network', rows: 7 },
    ],
  },
  {
    id: 'vlsm-2',
    source: 'PV_APT1 - Weitere Übungsaufgaben uGV WiFi VLSM Loesung',
    title: 'WLAN und Adressplanung Gäste-Netz',
    topic: 'Netzwerk/IP/Subnetting/WLAN',
    points: 25,
    intro: 'Für ein Gäste-WLAN werden Adressbereich, Sicherheit und DHCP-Parameter geplant.',
    attachments: [{ id: 'wifi', title: 'Anlage VLSM-1: Rahmenbedingungen', type: 'table', content: { headers: ['Anforderung', 'Wert'], rows: [['Maximale Clients', '60'], ['Netz', '172.16.8.0/24'], ['Gateway-Vorgabe', 'erste nutzbare Adresse'], ['Reservierungen', '10 Adressen für Infrastruktur']] } }],
    parts: [
      { id: 'p1', label: '2.1', text: 'Wählen Sie ein passendes Subnetz für mindestens 60 Clients plus Reserven und geben Sie Netz, Maske und Broadcast an.', points: 8, answerType: 'table', table: { headers: ['CIDR', 'Maske', 'Netz', 'Broadcast'], rows: [['', '', '', '']], answerColumns: [0, 1, 2, 3] } },
      { id: 'p2', label: '2.2', text: 'Planen Sie Gateway, DHCP-Start, DHCP-Ende und DNS-Server.', points: 6, answerType: 'table', table: { headers: ['Parameter', 'Wert'], rows: [['Gateway', ''], ['DHCP-Start', ''], ['DHCP-Ende', ''], ['DNS', '']], answerColumns: [1] } },
      { id: 'p3', label: '2.3', text: 'Nennen Sie drei Sicherheitsmaßnahmen für ein Gäste-WLAN.', points: 6, answerType: 'lined', rows: 5 },
      { id: 'p4', label: '2.4', text: 'Erläutern Sie, warum das Gäste-WLAN vom internen Netz getrennt werden sollte.', points: 5, answerType: 'textarea', rows: 5 },
    ],
  },
];
