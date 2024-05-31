






let elListaRiep = document.querySelector("#listaRiep");
let grandTotal = document.querySelector("#grandTotal");
let imgRiep = document.querySelector('#imgRiep');



console.log(localStorage);

let profumiCarrello = [];

function recuperaProfumiCarrello(){
    let totale = 0

    for (const key in localStorage) {
        
        if (Object.hasOwnProperty.call(localStorage, key)) {
            fetch("http://localhost:3000/profumi/" + key)
                .then(data => { return data.json() })
                .then(response => {
                    profumiCarrello.push(response);
                    
                    elListaRiep.innerHTML += `<li class='list-group-item'>${response.nome} - ${response.prezzo} € </li> <button class="btn btn-danger btn-sm float-end" onclick="rimuoviProdotto(${response.id})">Rimuovi</button>`;
                    totale += Number(response.prezzo);
                    grandTotal.innerHTML = "Totale: " + totale + " €"


                    //provo a mettere l immagine
                    let img = document.createElement('img');
                    img.setAttribute('src', response.immagine)
                    img.setAttribute('class','img-fluid')

                    imgRiep.appendChild(img)


            

                });

            // elListaRiep.innerHTML += `<li class='list-group-item'> ${localStorage[key]} € </li>`; 
            
            
               
        }
    }
}

window.addEventListener("DOMContentLoaded", recuperaProfumiCarrello)