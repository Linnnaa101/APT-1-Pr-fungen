# AP Teil 1 – Prüfungssimulation

Status: **Prototyp**. Private Lern- und Prüfungssimulations-Web-App für die Abschlussprüfung Teil 1 für Fachinformatiker Anwendungsentwicklung/Systemintegration. Die Anwendung ist **nicht offiziell**, nutzt kein IHK-Branding und zeigt keine PDF-Seiten als Aufgaben an.

> Hinweis: PDF-Inhalte müssen noch vollständig und sorgfältig übertragen bzw. fachlich geprüft werden. Die enthaltenen AP1-2026-Aufgaben sind als HTML-Struktur rekonstruiert und dienen als initiale Arbeitsbasis.

## Installation

```bash
npm install
```

## Start

```bash
npm run dev
```

Danach die lokale Vite-URL im Browser öffnen.

## Build

```bash
npm run build
```

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
- Jede gestartete Prüfung erhält eine eigene Session-ID aus Modus und Timestamp.
- Der Mix-Modus erstellt vier Aufgabenblöcke mit thematischer Mischung, einfacher Gewichtung und Rotation gegen zuletzt verwendete Aufgaben.
- Die PDF-Dateien dienen nur als private Vorlage; Aufgaben werden als HTML/React-Komponenten rekonstruiert.
- GitHub Actions führen bei Pull Requests `npm ci` und `npm run build` aus.
