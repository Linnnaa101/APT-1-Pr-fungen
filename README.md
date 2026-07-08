# AP Teil 1 – Prüfungssimulation

Private Lern- und Prüfungssimulations-Web-App für die Abschlussprüfung Teil 1 für Fachinformatiker Anwendungsentwicklung/Systemintegration. Die Anwendung ist **nicht offiziell**, nutzt kein IHK-Branding und zeigt keine PDF-Seiten als Aufgaben an.

## Installation

```bash
npm install
```

## Start

```bash
npm run dev
```

Danach die lokale Vite-URL im Browser öffnen.

## Ordnerstruktur

```text
/src
  /components      React-Komponenten für Prüfungsbogen, Timer, Navigation und Bewertung
  /data            Aufgabenpool, Prüfungszusammenstellungen und Lösungen
  /styles          prüfungsnahes CSS inklusive Drucklayout
/source-pdfs       Ablage privater Quell-PDFs; nicht für die Aufgabenanzeige verwendet
```

## Neue Aufgaben ergänzen

Neue Aufgaben werden in `src/data/tasks.ts` als `Task` ergänzt. Jede Aufgabe enthält Quelle, Titel, Thema, Punkte, Teilaufgaben, Antworttyp und optionale Anlagen. Lösungen werden getrennt in `src/data/solutions.ts` hinterlegt. Für Tabellen bitte echte `table`-Definitionen nutzen; Antwortlinien, Code- und Skizzenbereiche werden durch CSS/HTML erzeugt.

## Hinweise

- Die App speichert Antworten, Timerstand und Abgabestatus lokal im `localStorage`.
- Der Mix-Modus erstellt vier Aufgabenblöcke mit thematischer Mischung und einfacher Rotation.
- Die PDF-Dateien dienen nur als private Vorlage; Aufgaben werden als HTML/React-Komponenten rekonstruiert.
