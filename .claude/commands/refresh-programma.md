---
description: Ververs quiz (index.html) en programma (programma.html) op basis van de Obsidian PKM Gradenprogramma
argument-hint: optioneel 'check' om alleen verschillen te rapporteren zonder te schrijven
---

Vernieuw de inhoud van `index.html` en `programma.html` op basis van de meest recente data uit de Obsidian PKM vault.

<instructions>

## Stap 1 — Lees de bronbestanden uit Obsidian

Lees deze twee bestanden volledig:
- `C:\Users\anket\OneDrive\Documenten\Obsidian\PKM\PKM\Atlas\Karate\Gradenprogramma.md`
- `C:\Users\anket\OneDrive\Documenten\Obsidian\PKM\PKM\Atlas\Karate\Kyu Grade Belt Colors.md`

## Stap 2 — Lees de doelbestanden

Lees de huidige inhoud van:
- `index.html` (bevat de `const techniques = [...]` array in de `<script>` sectie)
- `programma.html` (bevat `<tr data-kyu="...">` rijen per sectie)

## Stap 3 — Analyseer de verschillen

Vergelijk de data uit Obsidian met wat er in beide bestanden staat.

Meld per bestand en per sectie:
- **Nieuwe technieken** in Obsidian die ontbreken in het HTML-bestand
- **Gewijzigde omschrijvingen** (tekst is anders)
- **Gewijzigde kyu-nummers**
- **Verwijderde technieken** (staan wel in HTML maar niet meer in Obsidian)

Als het argument `check` is meegegeven: rapporteer alleen de verschillen en stop hier.

## Stap 4 — Pas de bestanden aan

### index.html — `const techniques = [...]`

De array heeft objecten met deze structuur:
```js
{ naam: "NAAM", cat: "Categorie", kyu: 5, omschrijving: "Nederlandse omschrijving" }
```

Categorieënamen die in index.html gebruikt worden (gebruik exact deze schrijfwijze):
- `"Dachi Waza"` → sectie *Dachi Waza* in Obsidian
- `"Kamae Waza"` → sectie *Kamae Waza*
- `"Uke Waza"` → sectie *Uke Waza*
- `"Te Waza"` → sectie *TE WAZA / UCHI WAZA*
- `"Geri Waza"` → sectie *GERI WAZA*
- `"Ashi Sabaki"` → sectie *ASHI SABAKI*
- `"Kata"` → sectie *KATA WAZA*

Regels voor de update:
- Behoud de bestaande structuur en volgorde van de array
- Voeg nieuwe technieken toe aan het einde van de juiste categorie-groep
- Gebruik `kyu: null` voor technieken zonder kyu-nummer in Obsidian
- Pas omschrijvingen aan als ze gewijzigd zijn in Obsidian
- Verwijder technieken die niet meer in Obsidian staan alleen als je zeker bent — anders rapporteer en vraag bevestiging

### programma.html — `<tr data-kyu="...">` rijen

Elke rij heeft deze structuur:
```html
<tr data-kyu="5"><td class="kc"><span class="kb k5">5</span></td><td class="tn">NAAM</td><td class="td">Omschrijving.</td></tr>
```
Voor technieken zonder kyu (dan-niveau):
```html
<tr data-kyu="0"><td class="kc"><span class="kb kd">—</span></td><td class="tn">NAAM</td><td class="td">Omschrijving.</td></tr>
```

CSS-klassen voor gordelbadge op basis van kyu:
- kyu 9 → `k9`, kyu 8 → `k8`, kyu 7 → `k7`, kyu 6 → `k6`
- kyu 5 → `k5`, kyu 4 → `k4`, kyu 3 → `k3`, kyu 2 → `k2`
- kyu 1 → `k1`, geen kyu → `kd` en `data-kyu="0"`

Regels voor de update:
- Behoud de sectiestructuur (KIHON, KATA, WOORDENLIJST)
- Voeg nieuwe technieken toe binnen de juiste sectie, gesorteerd op kyu (9 eerst, 1 laatst, 0 onderaan)
- Pas omschrijvingen aan als ze gewijzigd zijn
- Verwijder technieken die niet meer in Obsidian staan alleen als je zeker bent

## Stap 5 — Bevestig de wijzigingen

Na het aanpassen: geef een kort overzicht in het Nederlands van wat er gewijzigd is in elk bestand (aantallen toegevoegd / gewijzigd / verwijderd per sectie).

</instructions>

Argument: $ARGUMENTS
