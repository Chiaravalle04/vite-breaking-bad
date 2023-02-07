#vite-breaking-bad

- Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu-Gi-Oh:
https://ygoprodeck.com/api-guide/
e con i dati restituiti, stampate una card per ogni personaggio.

- Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.

- PART 2

- Milestone 1:
Recuperare tramite chiamata API tutti gli archetype richiamando l'endpoint https://db.ygoprodeck.com/api/v7/archetypes.php e salvare i risultati. Utilizzare i dati salvati per riempire la select che servirà per filtrare le carte

- Milestone 2:
Implementare la logica di filtraggio dei risultati delle carte: al cambio del valore della select, effettuare una nuova chiamata API per ottenere una nuova lista di carte

- Bonus:
Creare un componente che mostri il numero totale di risultati ottenuti.
