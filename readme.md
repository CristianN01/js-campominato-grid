> Consegna:
> L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
> Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

    con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

> Consigli del giorno:
>  Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio: Di cosa ho bisogno per generare i numeri?

> Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.

<!-- SCOMPONIAMO IL PROBLEMA IN MICRO PASSAGGI SEMPLICI IN ITALIANO -->

1 Inizio con creare la griglia su html per vedere come esce alla fine con le classi create su css

2 Dopo cio inizio a scrivere il codice implementando sul file html la visualizazzione della griglia con i quadrati all'interno selezionando il container della griglia, aggiungendo con appendchild i quadrati allinterno della griglia, e con append aggiungiamo il contenuto dei quadrati.

3 aggiungo le classi al container e ai figli.

4 aggiungo la classer active e la lascio in standby.

5 aggiungo una funzione listener cosi da creare un evento click, cosi che a ogni ckick si aggiunga la classe active che fa colorare il quadrato e cambiare il colore della scritta all'interno.

6 infine aggiungo il tasto di reset per la griglia cosi da ricominciare il gioco.

7 personalizzo la pagina dopo aver fatto funzionare tutto.