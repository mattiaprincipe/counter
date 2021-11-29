Ciao 👋🏼, scrivo questo testo per illustrarvi nel modo piu semplice le caratteristiche del progetto.
Ho pensato di partire da un html vuoto per cercare di mettere in pratica quante più cose possibili tra quelle che abbiamo studiato nel corso, ho creato tutti gli elementi con javascript agganciandoli man mano al DOM per poi applicare loro gli stuli CSS sempre sotto forma di .CSStext su JS l'unica cosa che ho gestito su CSS sono: il reset dei margini html/body e le istruzioni delle animazioni con i @keyframe (poi triggerate con JS nello script) .
Sono partito dall'idea di emulare un counter "vecchio stile" sono andato a ritrovare i box e gli alert dei vecchi windows e ho cercato di ricreare nella maniera più verosimile quello stile, per poi "aggiornare" il tutto e rendere il counter più moderno sia come stile che come funzionlità aggiungendo oltre al +/- anche un +10/-10.
Nel creare questi ultimi due tasti li ho annidati per fare una prova di come si gestiscono gli eventi bubbling quindi li ho annidati e nell event listener che li gestisce ho inserito un prevent default cosi da non far partire il +10 e il +1 insieme.

Link:
https://mattiaprincipe.github.io/counter/


//  link ad altri progetti che ho realizzato:

In questo sito mi sono occupato della realizzazione del menu con le seguenti caratteristiche:
tasto apertura/chiusura del menu animato, underline dinamico del link in base alla pagina visitata, spaziatura dei link con un "hr" animato, tasto "back on top" visibile sono a menu chiuso e solo se la pagina è scrollata di almeno x pixel, overlay (cliccabile con chiusura del menu) che scrurisce il resto della pagina dando il focus del visitatore sul menu e rendendo il tutto non scrollabile a menù aperto.
Link: 
https://fapri.it/


Qui invece ho realizzato una pagina di login/signup per una piattaform di e-learning realizzata sia in light che in dark mode (automatica senza switch quindi in base alle impostazioni del device);
I form sono compilabili e funzionanti rilevano se il testo inserito è valido o no con delle funzioni.
Questo è stato solo un "esercizio" assegnatomi dalla web agency che gestisce il sito per avere uno sguardo alle mie capacità e non è la versione definitiva che andrà online:
https://mattiaprincipe.github.io/mooc/
