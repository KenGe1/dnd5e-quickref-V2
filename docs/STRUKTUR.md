# Dateistruktur & Aufbau der Seite

Diese Seite besteht aus einer statischen HTML-Struktur (`index.html`) und mehreren Daten-Dateien (`js/data_*.js` sowie optional `js/2024_data_*.js`). Die eigentliche Darstellung (Kacheln, Einklappen, Filter) wird in `js/quickref.js` gesteuert.

## Überblick: Wichtige Dateien

- **`index.html`**
  Enthält die einzelnen Hauptfelder (z. B. Bewegung, Aktion, Reaktion) als HTML-Abschnitte. Jeder Abschnitt hat eine `section-content`-Fläche und darin eine oder mehrere `section-row`-Container mit eindeutigen IDs (z. B. `basic-movement`).
- **`js/quickref.js`**
  Lädt die passenden Daten-Dateien (Standard oder 2024), befüllt die Abschnitte via `fill_section(...)` und initialisiert die UI (Ein-/Ausklappen, Filter).
- **`js/data_*.js`**
  Enthalten die Inhalte pro Hauptfeld als Arrays. Beispiel: `data_movement` ist ein Array mit Einträgen für „Bewegung“. Jeder Eintrag beschreibt Titel, Beschreibung, Stichpunkte usw.
- **`js/2024_data_*.js`**
  Parallele Daten-Dateien, die verwendet werden, wenn der 2024-Regelmodus aktiv ist. Die Logik dafür steht in `js/quickref.js`.

## So ist ein Hauptfeld aufgebaut

1. **HTML-Abschnitt** in `index.html`:
   - Ein `div.section-container` mit eigener ID (`section-…`).
   - Darin ein `.section-title` (Überschrift, Toggle, optional Zusatztext).
   - Darin ein `.section-content` mit einem oder mehreren `.section-row`-Containern.
   - Jeder `.section-row` hat eine eindeutige ID, über die `quickref.js` die Daten hinein rendert.

2. **Datenquelle** als Array in `js/data_*.js`:
   - Beispiel: `var data_movement = [ ... ];`
   - Die Einträge sind Objekte mit Feldern wie `title`, `subtitle`, `description`, `bullets`, `reference`, `icon`, `optional`.

3. **JavaScript-Anbindung** in `js/quickref.js`:
   - `ruleFiles` listet die zu ladenden Daten-Dateien.
   - `init()` ruft `fill_section(...)` für jede `section-row`-ID auf.

---

# Schritt-für-Schritt: Neues Hauptfeld „Schmieden“ hinzufügen

Die folgenden Schritte legen ein neues Hauptfeld namens **„Schmieden“** an. Du kannst die Struktur 1:1 auf andere Hauptfelder übertragen.

## 1) HTML-Abschnitt in `index.html` ergänzen

Füge einen neuen Block in `index.html` ein (analog zu Bewegung/Aktion/Reaktion). Beispiel:

```html
<!-- Schmieden section -->
<div id="section-smithing" class="section-container">
  <div class="section-title">
    <div class="section-title-content">
      <div class="section-title-text">
        Schmieden
        <span class="chevron"></span>
        <button class="collapse-all-btn">Alle Einträge einklappen</button>
      </div>
      <span class="float-right">optional</span>
    </div>
  </div>
  <div class="section-content">
    <div class="section-row section-subtitle text fontsize">
      Beispieltext: Regeln und Aktionen rund um das Schmieden.
    </div>
    <div class="section-row" id="basic-smithing"></div>
  </div>
</div>
```

Wichtig ist die eindeutige `section-row`-ID (`basic-smithing`), die später in `quickref.js` verwendet wird.

## 2) Daten-Datei anlegen: `js/data_smithing.js`

Lege eine neue Daten-Datei an:

```js
var data_smithing = [
  {
    title: "Waffe schmieden",
    subtitle: "Metall bearbeiten und formen",
    description: "Du stellst eine Waffe aus Rohmaterial her.",
    bullets: [
      "Benötigt Schmiedewerkzeug",
      "Dauert mehrere Stunden",
      "Materialkosten abhängig vom Item"
    ],
    reference: "Hausregel",
    icon: "anvil",
    optional: "Hausregel"
  }
];
```

Falls du 2024-Regeln unterstützt, lege zusätzlich **`js/2024_data_smithing.js`** an und definiere dort ein gleichnamiges Array `data_smithing`.

## 3) Daten-Datei in `js/quickref.js` registrieren

Erweitere die Liste der zu ladenden Dateien (`ruleFiles`) um `data_smithing`:

```js
var ruleFiles = [
  'data_movement',
  'data_action',
  'data_bonusaction',
  'data_reaction',
  'data_condition',
  'data_environment',
  'data_smithing'
];
```

## 4) Abschnitt in `init()` befüllen

Füge einen weiteren `fill_section(...)`-Aufruf hinzu:

```js
fill_section(data_smithing, "basic-smithing", "Schmieden");
```

## 5) Optional: Filter/Toggle prüfen

Wenn du optionalen Inhalt hast (z. B. Hausregel), achte darauf, dass `optional` passend gesetzt ist (z. B. `"Hausregel"`). Die Filterlogik greift danach automatisch, wenn die bestehenden Schalter aktiv sind.

---

## Checkliste

- [ ] HTML-Abschnitt inkl. eindeutiger `section-row`-ID eingefügt
- [ ] `js/data_smithing.js` angelegt und `data_smithing`-Array definiert
- [ ] (Optional) `js/2024_data_smithing.js` angelegt
- [ ] `data_smithing` in `quickref.js` geladen (`ruleFiles`)
- [ ] `fill_section(...)`-Aufruf ergänzt

