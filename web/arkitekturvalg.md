# Dokumentasjon arkitektur og systemvalg

## Beskrivelse
Vi har valgt å lage en nettside som skal vise statistikk over kriminalitet i kommuner og fylker i Norge.

## Data
Vi har funnet en CSV fil fra SSB (https://www.ssb.no/lovbrudda) som inneholder statistikk over kriminaliteten i Norge. For å ta i bruk denne har vi laget et verktøy i Node som leser feltene og setter de inn i en databasestruktur i sqlite3.

### Denne csv filen inneholder data om
- Lokasjon
- All kriminalitet (absolutt og pr 1000 innbygger)
- Eiendom Tyveri  (absolutt og pr 1000 innbygger)
- Voldshendelser (absolutt og pr 1000 innbygger)
- Narkotika (absolutt og pr 1000 innbygger)
- Ordensforstyrrelser (absolutt og pr 1000 innbygger)
- Trafikkforseelser (absolutt og pr 1000 innbygger)
- Annen kriminalitet (inkludert seksualforbrytelser) (absolutt og pr 1000 innbygger)

## Planlagt implementasjon
Vi kommer til å lage en REST basert backend basert på Node.js som vil lese og skrive data til en sqlite database. Grunnen til at vi valgte sqlite er fordi vi vil lære å bruke det i tillegg til at vi slipper å installere og drifte en sql server.

### Hva vi skal gjøre:
Arkitektur:
lag database struktur.
Overføre datasett til sqlite.
Angular template.
Registrer bruker/Login.
Liste opp fylker rangert etter kriminalitet.
Sende liste over fylker med kriminalitet til frontend.
min side med oversikt over hva du har søkt på.
Logging av hva man har søkt på.
Dynamisk lasting av flere kommuner.
ordsky over hvilke kommuner som gjør mest kriminalitet.
expand kommuner for å se mer detaljert statistikk.
Sortere listen på absolutte tall og pr 1000 innbygger. og pr kategori .
søke på kommuner.
Forside med routes til komponenter, eksempel listevisning.

## Valg av løsning
Vi har valgt å bruke NodeJs, Angular IO, bootstrap, fontawesome og sqlite3.
