# Counter App

Applicazione web interattiva che simula il funzionamento di un contatore, sviluppata interamente in **JavaScript puro (Vanilla JS)** con creazione dinamica dell'interfaccia tramite manipolazione del DOM.

## Prova l'applicazione online

**[Apri la demo live su GitHub Pages](https://alessandrosambusida-pro93.github.io/counter-js/)**

---

## Anteprima

![Anteprima dell'applicazione Counter](screenshot.png)

---

## Descrizione e funzionalità

Ho progettato e sviluppato questa applicazione con l'obiettivo di gestire lo stato di un contatore in modo sicuro, intuitivo e persistente, separando nettamente la costruzione dinamica dell'interfaccia dalla logica applicativa:

- **Interfaccia dinamica via DOM:** Tutti gli elementi visivi (titolo, display numerico e pulsanti) vengono generati dinamicamente tramite JavaScript all'avvio della pagina, mantenendo il file HTML essenziale.
- **Incremento (`+`) e decremento (`−`):** Permette di aumentare o diminuire il valore di una unità per volta.
- **Blocco al valore minimo (`0`):** Il contatore non scende sotto lo zero; se l'utente tenta di decrementare ulteriormente, viene mostrato un messaggio di avviso (`alert`).
- **Procedura di Reset con conferma:** Il pulsante `Reset` verifica che il contatore non sia già a `0` e chiede conferma all'utente (`confirm`) prima di azzerare il conteggio.
- **Salvataggio automatico (`localStorage`):** Il valore corrente viene memorizzato automaticamente nel browser e ripristinato al ricaricamento della pagina.
- **Design responsive:** Layout centrato e adattabile a desktop, tablet e smartphone.

---

## Tecnologie utilizzate

- **HTML5** (struttura semantica minimale)
- **CSS3** (Custom Properties, Flexbox, design responsive)
- **JavaScript ES6+** (manipolazione dinamica del DOM, gestione eventi, `localStorage`)

---

## Struttura del progetto

```text
counter-js/
├── index.html          # Struttura base della pagina e contenitore principale
├── css/
│   └── style.css       # Stili, variabili CSS e layout responsive
├── js/
│   └── script.js       # Creazione dinamica del DOM e logica del contatore
├── img/
│   └── screenshot.png  # Anteprima grafica dell'applicazione
└── README.md           # Documentazione del progetto
