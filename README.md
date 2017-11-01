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
Arkitektur
lag database struktur
Overføre datasett til sqlite
Angular template
Registrer bruker/Login
Registrer bruker
Liste opp fylker rangert etter kriminalitet
Sende liste over fylker med kriminalitet til frontend
min side med oversikt over hva du har søkt på
Logging av hva man har søkt på
Dynamisk lasting av flere kommuner
ordsky over hvilke kommuner som gjør mest kriminalitet
expand kommuner for å se mer detaljert statistikk
Sortere listen på absolutte tall og pr 1000 innbygger. og pr kategori 
søke på kommuner
Forside med routes til komponenter, eksempel listevisning

## Valg av løsning
Vi har valgt å bruke NodeJs, Angular IO, bootstrap, fontawesome og sqlite3.

# Initial Readme

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
