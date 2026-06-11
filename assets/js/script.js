// EpiShop — Settimana VI, Giorno IV
// Render dinamico dei prodotti + filtro per categoria + toggle tema.


// === Dati ===

const prodotti = [
  { id: 1, nome: "Sneaker Run", prezzo: 89, categoria: "scarpe",
    descrizione: "Scarpa leggera per la corsa, suola in gomma traspirante.",
    img: "https://placehold.co/300x180" },
  { id: 2, nome: "T-shirt basic", prezzo: 19, categoria: "abbigliamento",
    descrizione: "Cotone biologico, taglio regolare, disponibile in 5 colori.",
    img: "https://placehold.co/300x180" },
  { id: 3, nome: "Borsa city", prezzo: 49, categoria: "accessori",
    descrizione: "Tessuto resistente, tasca interna, cinghia regolabile.",
    img: "https://placehold.co/300x180" },
  { id: 4, nome: "Sandali estate", prezzo: 39, categoria: "scarpe",
    descrizione: "Plantare anatomico, pelle vegana, perfetti per l'estate.",
    img: "https://placehold.co/300x180" },
  { id: 5, nome: "Felpa con cappuccio", prezzo: 59, categoria: "abbigliamento",
    descrizione: "Tessuto morbido, tasca a marsupio, polsini elasticizzati.",
    img: "https://placehold.co/300x180" },
  { id: 6, nome: "Cappello sport", prezzo: 14, categoria: "accessori",
    descrizione: "Visiera regolabile, traspirante, ideale per gli allenamenti.",
    img: "https://placehold.co/300x180" },
];


// === Render ===

function renderProdotti(lista) {
  const html = lista.map(p => `
    <article class="col-12 col-sm-6 col-xl-4 mb-3">
      <div class="card h-100 ${p.categoria}">
        <img src="${p.img}" class="card-img-top" alt="${p.nome}">
        <div class="card-body">
          <h5 class="card-title">${p.nome}</h5>
          <p class="card-text">${p.descrizione}</p>
          <p class="fw-bold fs-5 m-0">€ ${p.prezzo}</p>
        </div>
      </div>
    </article>
  `).join("");

  document.getElementById("contenitore-prodotti").innerHTML = html;
}


// === Filtro per categoria con event delegation ===

const filtri = document.getElementById("filtri");

filtri.addEventListener("click", function (event) {
  const bottone = event.target.closest("[data-categoria]");
  if (!bottone) return;

  // aggiorna lo stato visivo: rimuovi 'active' dagli altri, aggiungi al cliccato
  filtri.querySelectorAll(".btn").forEach(b => b.classList.remove("active"));
  bottone.classList.add("active");

  const categoria = bottone.dataset.categoria;
  const filtrati = categoria === "tutti"
    ? prodotti
    : prodotti.filter(p => p.categoria === categoria);

  renderProdotti(filtrati);
});


// === Toggle dark mode (dal Giorno III) ===

const toggle = document.getElementById("toggle-tema");

toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggle.textContent = isDark ? "Tema chiaro" : "Tema scuro";
});


// === Inizializzazione: render di tutti i prodotti ===

renderProdotti(prodotti);
