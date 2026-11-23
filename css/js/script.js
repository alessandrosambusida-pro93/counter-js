// Seleziono il contenitore principale presente nell'HTML
const appContainer = document.getElementById("app");

// Definisco la chiave per memorizzare il valore nel browser
const STORAGE_KEY = "counter_valore_salvato";

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

// Recupero in sicurezza l'eventuale valore salvato in precedenza nel localStorage
function caricaValoreIniziale() {
  const datoSalvato = localStorage.getItem(STORAGE_KEY);

  if (datoSalvato === null) {
    return 0;
  }

  const numeroConvertito = Number(datoSalvato);

  if (!Number.isNaN(numeroConvertito) && numeroConvertito >= 0) {
    return numeroConvertito;
  }

  return 0;
}

// Genero l'interfaccia all'avvio e conservo i riferimenti agli elementi DOM
const elementiUI = creaInterfacciaCounter();

// Inizializzo lo stato del contatore partendo dal valore salvato o da 0
let conteggio = caricaValoreIniziale();

// Aggiorno contemporaneamente l'interfaccia visiva e il salvataggio locale
function aggiornaCounter() {
  elementiUI.displayValore.textContent = String(conteggio);
  localStorage.setItem(STORAGE_KEY, String(conteggio));
}

// Gestisco l'aumento del valore al click sul pulsante +
function gestisciIncremento() {
  conteggio += 1;
  aggiornaCounter();
}

// Gestisco la diminuzione del valore impedendo di scendere sotto 0
function gestisciDecremento() {
  if (conteggio > 0) {
    conteggio -= 1;
    aggiornaCounter();
  } else {
    alert("Il contatore è già a 0: non è possibile scendere sotto questo valore.");
  }
}

// Gestisco l'azzeramento del contatore previa conferma dell'utente
function gestisciReset() {
  if (conteggio === 0) {
    alert("Il contatore è già impostato a 0.");
    return;
  }

  const confermaAzzeramento = confirm("Sei sicuro di voler azzerare il contatore?");

  if (confermaAzzeramento) {
    conteggio = 0;
    aggiornaCounter();
  }
}

// Collego gli ascoltatori di eventi ai tre pulsanti
elementiUI.btnIncrementa.addEventListener("click", gestisciIncremento);
elementiUI.btnDecrementa.addEventListener("click", gestisciDecremento);
elementiUI.btnReset.addEventListener("click", gestisciReset);

// Sincronizzo subito il display con il valore iniziale caricato
aggiornaCounter();