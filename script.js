// Seleziono il contenitore principale presente nell'HTML
const appContainer = document.getElementById("app");

// Definisco la funzione dedicata esclusivamente alla creazione dinamica del DOM
function creaInterfacciaCounter() {
  // Creo la card principale che ospiterà l'intera interfaccia
  const counterCard = document.createElement("section");
  counterCard.classList.add("counter-card");

  // Creo il titolo dell'applicazione
  const titolo = document.createElement("h1");
  titolo.classList.add("counter-title");
  titolo.textContent = "Contatore";

  // Creo il display che mostra il valore corrente del contatore
  const displayValore = document.createElement("div");
  displayValore.classList.add("counter-display");
  displayValore.id = "counter-value";
  displayValore.setAttribute("aria-live", "polite");
  displayValore.textContent = "0";

  // Creo il contenitore per i pulsanti di controllo
  const gruppoPulsanti = document.createElement("div");
  gruppoPulsanti.classList.add("counter-controls");

  // Creo il pulsante per diminuire il valore
  const btnDecrementa = document.createElement("button");
  btnDecrementa.type = "button";
  btnDecrementa.classList.add("btn", "btn-decrement");
  btnDecrementa.setAttribute("aria-label", "Diminuisci il valore del contatore");
  btnDecrementa.textContent = "−";

  // Creo il pulsante per resettare il valore a zero
  const btnReset = document.createElement("button");
  btnReset.type = "button";
  btnReset.classList.add("btn", "btn-reset");
  btnReset.setAttribute("aria-label", "Azzera il valore del contatore");
  btnReset.textContent = "Reset";

  // Creo il pulsante per aumentare il valore
  const btnIncrementa = document.createElement("button");
  btnIncrementa.type = "button";
  btnIncrementa.classList.add("btn", "btn-increment");
  btnIncrementa.setAttribute("aria-label", "Aumenta il valore del contatore");
  btnIncrementa.textContent = "+";

  // Assemblo i pulsanti nel loro contenitore
  gruppoPulsanti.append(btnDecrementa, btnReset, btnIncrementa);

  // Assemblo tutti gli elementi nella card principale
  counterCard.append(titolo, displayValore, gruppoPulsanti);

  // Inserisco la card nella pagina web
  appContainer.appendChild(counterCard);

  // Restituisco solo i riferimenti utili per gestire gli eventi e l'aggiornamento
  return {
    displayValore,
    btnDecrementa,
    btnReset,
    btnIncrementa
  };
}

// Genero l'interfaccia all'avvio e conservo i riferimenti agli elementi DOM
const elementiUI = creaInterfacciaCounter();