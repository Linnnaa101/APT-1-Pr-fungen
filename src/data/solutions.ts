import type { Task } from './tasks';

export type SolutionPart = {
  taskId: string;
  partId: string;
  text: string;
};

export const solutions: SolutionPart[] = [
  { taskId: 'ap1-2026-1', partId: 'p1', text: 'Ja: Port 1-4 unterstützen 802.3af/at mit 30 W je Port. Die Kamera benötigt 802.3af und maximal 8,5 W; auch das Gesamtbudget reicht für eine Kamera.' },
  { taskId: 'ap1-2026-1', partId: 'p2', text: '3840 × 2160 × 24 Bit × 25/s = 4.976.640.000 Bit/s ≈ 4,98 Gbit/s unkomprimiert.' },
  { taskId: 'ap1-2026-1', partId: 'p3', text: 'H.265 speichert nur notwendige Bildinformationen, nutzt Interframe-Kompression/Bewegungsvektoren und variable Bitrate; dadurch sinkt die reale Datenrate deutlich.' },
  { taskId: 'ap1-2026-1', partId: 'p4', text: 'RJ45: Netzwerk/PoE; Audio In/Out: Mikrofon/Lautsprecher; microSD: lokale Aufzeichnung; Reset: Zurücksetzen auf Werkseinstellungen.' },
  { taskId: 'ap1-2026-1', partId: 'p5', text: 'Netzwerkschrank: PoE-Switch-Port -> Patchkabel -> Patchpanel -> Installationskabel -> Datendose -> Patchkabel -> Kamera.' },
  { taskId: 'ap1-2026-2', partId: 'p1', text: 'Bei /27: Netz 192.168.10.32, erster Host .33, letzter Host .62, Broadcast .63.' },
  { taskId: 'ap1-2026-2', partId: 'p2', text: 'Client A liegt im Netz 192.168.10.32/27. Der Server .70 liegt im Netz 192.168.10.64/27 und ist daher nicht direkt lokal erreichbar.' },
  { taskId: 'ap1-2026-2', partId: 'p3', text: 'Beispiel: Client 192.168.10.37, Maske 255.255.255.0, Gateway 192.168.10.33; damit liegen .37, .54 und .70 im gleichen /24.' },
  { taskId: 'ap1-2026-2', partId: 'p4', text: 'IPv4: 32 Bit, dezimal mit Punkten. IPv6: 128 Bit, hexadezimal mit Doppelpunkten. Vorteile: größerer Adressraum, Autokonfiguration, weniger NAT-Bedarf.' },
  { taskId: 'ap1-2026-2', partId: 'p5', text: 'ipconfig/ifconfig, arp -a, tracert/traceroute, route print, Prüfung von VLAN, Firewall und Gateway sind geeignet.' },
  { taskId: 'ap1-2026-3', partId: 'p1', text: 'Vorteile: Fehlernachweis und Prozessoptimierung. Risiken: Datenschutzverstöße, Missbrauch zur Mitarbeiterkontrolle, Speicher-/Betriebsaufwand.' },
  { taskId: 'ap1-2026-3', partId: 'p2', text: '10.12.4.25 ist privat, da 10.0.0.0/8 nach RFC1918 für private Netze reserviert ist.' },
  { taskId: 'ap1-2026-3', partId: 'p3', text: 'Gateway erreichbar, Kameraserver nicht erreichbar, Internetziel nicht erreichbar. Mögliche Ursachen: Server down, falsches Routing/VLAN, Firewall, fehlende Default-Route.' },
  { taskId: 'ap1-2026-3', partId: 'p4', text: 'Change Request erfassen, Auswirkung/Risiko bewerten, Freigabe einholen, Umsetzung planen, testen, dokumentieren und abschließen.' },
  { taskId: 'ap1-2026-3', partId: 'p5', text: 'Zweckbindung dokumentieren, Speicherfrist 72 h umsetzen, Zugriff beschränken/protokollieren, Betriebsrat einbeziehen, Beschäftigte informieren.' },
  { taskId: 'ap1-2026-3', partId: 'p6', text: 'Beispiele: höhenverstellbare Arbeitsplätze, blendfreie Monitore, Pausen/Wechselbelastung, leichte Scanner, Schulung der Körperhaltung.' },
  { taskId: 'ap1-2026-4', partId: 'p1', text: 'Klasse ShippingCalculator mit calculate(orderValue, weight): Money; ggf. Konstanten freeShippingLimit, smallParcelLimit, parcelLimit und Preise.' },
  { taskId: 'ap1-2026-4', partId: 'p2', text: 'Wenn Bestellwert >= 100 dann 0; sonst nach Gewicht: <=5 kg 4,90, <=20 kg 9,90, sonst 29,90.' },
  { taskId: 'ap1-2026-4', partId: 'p3', text: '82,50 € liegt unter 100 €, 7,2 kg liegt über 5 kg und bis 20 kg: Versandkosten 9,90 €.' },
  { taskId: 'ap1-2026-4', partId: 'p4', text: 'Kunde 1:n Bestellung, Bestellung 1:n Bestellposition, Artikel 1:n Bestellposition; Position enthält Menge und Einzelpreis.' },
  { taskId: 'ap1-2026-4', partId: 'p5', text: 'Beispiele: 120 €/1 kg => 0 €, 50 €/5 kg => 4,90 €, 50 €/20 kg => 9,90 €, 50 €/25 kg => 29,90 €.' },
  { taskId: 'bw-2023-1', partId: 'p1', text: 'Annahme, Klassifizierung/Priorisierung, Analyse, Lösung/Weiterleitung, Test, Rückmeldung, Dokumentation, Abschluss.' },
  { taskId: 'bw-2023-1', partId: 'p2', text: 'WLAN schulweit: P1; Scanner eines PCs: P3; Drucker Fachraum: meist P2. Begründung über Auswirkung und Dringlichkeit.' },
  { taskId: 'bw-2023-1', partId: 'p3', text: 'Melder/Kontakt, betroffenes System, Fehlerbeschreibung, Zeitpunkt, Auswirkung, Priorität, bereits durchgeführte Maßnahmen.' },
  { taskId: 'bw-2023-1', partId: 'p4', text: 'Freundliche Abschlussmeldung mit Ursache, durchgeführter Maßnahme, Testergebnis, Bitte um Rückmeldung bei erneutem Auftreten.' },
  { taskId: 'bw-2023-2', partId: 'p1', text: '845,00 € × 10 = 8.450,00 € netto; × 1,19 = 10.055,50 € brutto.' },
  { taskId: 'bw-2023-2', partId: 'p2', text: 'B ist leistungsstärker und hat besseren Service, A ist günstiger. Bewertung muss Anforderungen und Budget abwägen.' },
  { taskId: 'bw-2023-2', partId: 'p3', text: 'Bei anspruchsvollen Fachraumanwendungen ist B wegen RAM, SSD und Vor-Ort-Garantie plausibel; bei knappem Budget A.' },
  { taskId: 'bw-2023-2', partId: 'p4', text: 'Energieeffizienz, Reparierbarkeit, Garantie/Lebensdauer, Recycling, Lieferkette, modulare Erweiterbarkeit.' },
  { taskId: 'lf4-1', partId: 'p1', text: 'Kunde(KundenNr, Name), Auftrag(AuftragsNr, Datum), Position(PosNr, Menge), Artikel(ArtikelNr, Bezeichnung, Preis).' },
  { taskId: 'lf4-1', partId: 'p2', text: 'Kunde 1..* Auftrag; Auftrag 1..* Position als Komposition; Artikel 1..* Position als Assoziation.' },
  { taskId: 'lf4-1', partId: 'p3', text: 'Auftrag.berechneSumme(), Position.berechnePositionspreis(), Kunde.aendereAdresse().' },
  { taskId: 'lf4-1', partId: 'p4', text: 'Assoziation ist eine lose Beziehung; Komposition bedeutet starke Teil-Ganzes-Beziehung, z. B. Position existiert nur im Auftrag.' },
  { taskId: 'lf4-2', partId: 'p1', text: 'Wiederholungsgruppen, Redundanz, Einfüge-/Änderungs-/Löschanomalien und leere Felder.' },
  { taskId: 'lf4-2', partId: 'p2', text: 'Kunde, Bestellung, Bestellposition, Artikel mit Primär- und Fremdschlüsseln; Artikeldaten werden nur in Artikel gespeichert.' },
  { taskId: 'lf4-2', partId: 'p3', text: 'Kunde 1:n Bestellung, Bestellung 1:n Position, Artikel 1:n Position.' },
  { taskId: 'lf4-2', partId: 'p4', text: 'SELECT * FROM bestellposition JOIN artikel USING (artikel_id) WHERE bestellung_id = ?;' },
  { taskId: 'vlsm-1', partId: 'p1', text: '100 Hosts: 10.0.0.0/25, Broadcast .127; 50: 10.0.0.128/26, Broadcast .191; 20: 10.0.0.192/27, Broadcast .223; 2: 10.0.0.224/30, Broadcast .227.' },
  { taskId: 'vlsm-1', partId: 'p2', text: 'Größte Netze zuerst verhindern Fragmentierung des Adressraums und erleichtern lückenlose Vergabe.' },
  { taskId: 'vlsm-1', partId: 'p3', text: '/25: 126, /26: 62, /27: 30, /30: 2 nutzbare Hosts.' },
  { taskId: 'vlsm-1', partId: 'p4', text: 'Router mit Trunk zum Switch; Subinterfaces je VLAN, z. B. VLAN 10 Verwaltung, 20 Schulung, 30 WLAN.' },
  { taskId: 'vlsm-2', partId: 'p1', text: 'Für 60 Clients plus Reserven eignet sich /25: Maske 255.255.255.128, Netz 172.16.8.0, Broadcast 172.16.8.127.' },
  { taskId: 'vlsm-2', partId: 'p2', text: 'Gateway 172.16.8.1; DHCP z. B. 172.16.8.11 bis 172.16.8.126; DNS je nach Vorgabe intern oder öffentlich.' },
  { taskId: 'vlsm-2', partId: 'p3', text: 'WPA2/WPA3, Client-Isolation, VLAN/Firewall-Trennung, Captive Portal, zeitlich begrenzte Zugangsdaten.' },
  { taskId: 'vlsm-2', partId: 'p4', text: 'Trennung schützt interne Systeme, begrenzt Schadensausbreitung und erlaubt eigene Regeln/Bandbreiten für Gäste.' },
];

export const solutionFor = (task: Task, partId: string) =>
  solutions.find((solution) => solution.taskId === task.id && solution.partId === partId)?.text ??
  'Musterlösung individuell prüfen; Punkte nach fachlicher Vollständigkeit vergeben.';
