// let elprofumiDisponibili = document.querySelector("#profumiDisponibili .row");
// let elprofumiNonDisponibili = document.querySelector("#profumiNonDisponibili .row");

// function recuperaProfumi() {
//     const urlProfumi = "http://localhost:3000/profumi";

//     fetch(urlProfumi)
//     .then(data => {
//         console.log("Fetch response status:", data.status);  // Log the status of the fetch response
//         return data.json();
//     })
//     .then(response => {
//         console.log("Response JSON:", response);  // Log the entire response
        
//         // Verifica la presenza della chiave 'profumi' nella risposta
//         if (response) {
//             let profumi = response; // Accedi alla chiave 'profumi'
//             console.log("Dati ricevuti:", profumi);

//             profumi.forEach(profumo => {
//                 let colonna = creaColonna(profumo);
//                 if (profumo.disponibilita) {
//                     console.log(`Appending available profumo: ${profumo.nome}`);
//                     elprofumiDisponibili.appendChild(colonna);  // Append the column to the available container
//                 } else {
//                     console.log(`Appending unavailable profumo: ${profumo.nome}`);
//                     elprofumiNonDisponibili.appendChild(colonna);  // Append the column to the non-available container
//                 }
//             });
//         } else {
//             console.error("La chiave 'profumi' non è presente nella risposta JSON:", response);
//         }
//     })
//     .catch(error => console.error("Errore durante il recupero dei profumi:", error));
// }

// window.addEventListener("DOMContentLoaded", recuperaProfumi);

// function creaCardProfumo(profumo) {
//     const card = document.createElement('div');
//     card.classList.add('card', 'mb-4');

//     const imgTop = document.createElement('img');
//     imgTop.classList.add('card-img-top');
//     imgTop.src = profumo.immagine;
//     imgTop.alt = 'Immagine profumo';

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     const cardTitle = document.createElement('h5');
//     cardTitle.classList.add('card-title');
//     cardTitle.textContent = profumo.nome;

//     cardBody.appendChild(cardTitle);
//     card.appendChild(imgTop);
//     card.appendChild(cardBody);

//     console.log(`Disponibilità profumo "${profumo.nome}":`, profumo.disponibilita); // Debug: Check the availability status

//     if (profumo.disponibilita) {
//         cardBody.innerHTML += `<p class="card-text"> Fragranza: ${profumo.tipo} <br>Prezzo: ${profumo.prezzo} €</p>`;

//         const button = document.createElement('button');
//         button.classList.add('btn', 'btn-primary');
//         button.textContent = "Acquista";
//         cardBody.appendChild(button);

//         button.addEventListener("click", function() {
//             localStorage.setItem(profumo.id, profumo.nome + " - " + profumo.tipo + " - " + profumo.prezzo );
//         });
//     } else {
//         cardBody.innerHTML += `<p class="card-text"> Fragranza non disponibile </p>`;
//     }

//     return card;
// }

// function creaColonna(profumo) {
//     const colonna = document.createElement('div');
//     colonna.classList.add('col-lg-3', 'col-md-4', 'col-sm-6');

//     // Crea la card
//     const card = creaCardProfumo(profumo);

//     // Aggiungi la card alla colonna
//     colonna.appendChild(card);

//     return colonna;
// }



let elprofumiDisponibili = document.querySelector("#profumiDisponibili .row");
let elprofumiNonDisponibili = document.querySelector("#profumiNonDisponibili .row");

function recuperaProfumi() {
    const urlProfumi = "http://localhost:3000/profumi";

    fetch(urlProfumi)
    .then(data => {
        console.log("Fetch response status:", data.status);  // Log the status of the fetch response
        return data.json();
    })
    .then(response => {
        console.log("Response JSON:", response);  // Log the entire response
        
        // Verifica la presenza della chiave 'profumi' nella risposta
        if (response) {
            let profumi = response; // Accedi alla chiave 'profumi'
            console.log("Dati ricevuti:", profumi);

            profumi.forEach(profumo => {
                let colonna = creaColonna(profumo);
                if (profumo.disponibilita) {
                    console.log(`Appending available profumo: ${profumo.nome}`);
                    elprofumiDisponibili.appendChild(colonna);  // Append the column to the available container
                } else {
                    console.log(`Appending unavailable profumo: ${profumo.nome}`);
                    elprofumiNonDisponibili.appendChild(colonna);  // Append the column to the non-available container
                }
            });
        } else {
            console.error("La chiave 'profumi' non è presente nella risposta JSON:", response);
        }
    })
    .catch(error => console.error("Errore durante il recupero dei profumi:", error));
}

window.addEventListener("DOMContentLoaded", recuperaProfumi);

function creaCardProfumo(profumo) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-4');

    const imgTop = document.createElement('img');
    imgTop.classList.add('card-img-top');
    imgTop.src = profumo.immagine;
    imgTop.alt = 'Immagine profumo';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = profumo.nome;

    cardBody.appendChild(cardTitle);
    card.appendChild(imgTop);
    card.appendChild(cardBody);

    console.log(`Disponibilità profumo "${profumo.nome}":`, profumo.disponibilita); // Debug: Check the availability status

    if (profumo.disponibilita) {
        cardBody.innerHTML += `<p class="card-text"> Fragranza: ${profumo.tipo} <br>Prezzo: ${profumo.prezzo} €</p>`;

        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.textContent = "Acquista";
        cardBody.appendChild(button);

        button.addEventListener("click", function() {
            localStorage.setItem(profumo.id, profumo.nome + " - " + profumo.tipo + " - " + profumo.prezzo );

            // Mostra il modal quando si clicca su "Acquista"
            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
            myModal.show();
        });
    } else {
        cardBody.innerHTML += `<p class="card-text"> Fragranza non disponibile </p>`;
    }

    return card;
}

function creaColonna(profumo) {
    const colonna = document.createElement('div');
    colonna.classList.add('col-lg-3', 'col-md-4', 'col-sm-6');

    // Crea la card
    const card = creaCardProfumo(profumo);

    // Aggiungi la card alla colonna
    colonna.appendChild(card);

    return colonna;
}
