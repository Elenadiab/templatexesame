


let elListaRiep = document.querySelector("#listaRiep");
let grandTotal = document.querySelector("#grandTotal");

let profumiCarrello = [];

function recuperaProfumiCarrello(){
    let totale = 0;

    for (const key in localStorage) {
        if (Object.hasOwnProperty.call(localStorage, key)) {
            fetch("http://localhost:3000/profumi/" + key)
                .then(data => data.json())
                .then(response => {
                    profumiCarrello.push(response);

                    let listItem = document.createElement('li');
                    listItem.className = 'list-group-item';
                    listItem.setAttribute('data-key', key); // Aggiungi attributo data-key
                    
                    let img = document.createElement('img');
                    img.setAttribute('src', response.immagine);
                    img.setAttribute('class','img-fluid mb-2'); // mb-2 aggiunge margine inferiore

                    let textContainer = document.createElement('div');
                    textContainer.innerHTML = `${response.nome} - ${response.prezzo} € 
                        <button class="btn btn-danger btn-sm float-end" onclick="rimuoviProdotto('${key}', this)">Rimuovi</button>`;
                    
                    listItem.appendChild(img); // Aggiungi l'immagine come primo elemento
                    listItem.appendChild(textContainer); // Aggiungi il testo e il pulsante

                    elListaRiep.appendChild(listItem);

                    totale += Number(response.prezzo);
                    grandTotal.innerHTML = "Totale: " + totale + " €";
                });
        }
    }
}

function rimuoviProdotto(key, button) {
    localStorage.removeItem(key);

    let listItem = button.parentElement.parentElement; // Modifica per ottenere il genitore giusto
    elListaRiep.removeChild(listItem);

    let totale = 0;
    for (let i = 0; i < elListaRiep.children.length; i++) {
        let item = elListaRiep.children[i];
        let prezzo = item.textContent.match(/(\d+(\.\d+)?) €/)[1];
        totale += parseFloat(prezzo);
    }
    grandTotal.innerHTML = "Totale: " + totale + " €";
}

window.addEventListener("DOMContentLoaded", recuperaProfumiCarrello);

