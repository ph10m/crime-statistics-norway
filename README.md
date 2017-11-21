# Dokumentasjon av system

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

## Hvordan vi har løst oppgavekravene
- Systemet kjører på vår virtuelle maskin http://it2810-10.idi.ntnu.no:8084/ og er utviklet med AngularIO (V4) Vi bruker også Node.js på serversiden. 
- Backend databasen vår ligger under web/server og er db.db, vi bruker Sqlite3 til dette etter REST prinsippene.
- Vi skriver til databasen ved lagring og innlogging av brukere, mens vi leser fra den både under brukerhåndtering samt datafremvisning under Crimes-siden.
- I denne listen kan du søke etter statistikk basert på stedsnavn.
- Vi har en listebasert visning som viser mer info om stedene med en expand/collapse funksjon, når du klikker på navnet til stedet (ikke selve listeelementet)
- Denne listen kan sorteres etter stigende/synkende verdi basert på totalt antall hendelser. 
- For hvert søk du gjør lagres søkene under min side, her kan du sortere basert på navn eller dato, i tillegg filtrering av unike søk eller gyldige søk (evt. begge)
- Vi laster data dynamisk ved at når du scroller ned på siden vil det lastes flere treff, gitt at det er flere gyldige treff
- Under "My site" kan du se informasjon om søk du har gjort tidligere.
- Vi bruker session-håndtering til å vite hvem som er logget inn. 
- Vi har en fancy visuell visning med ordsky under siden word clouds.
- Koden er testet med noen skrevne tester, unit testing og er tilsynelatende feilfri. Siden fungerer som forventet.
- Prosjektet er godt dokumentert med kommentarer i kode samt denne dokumentasjonsfilen.