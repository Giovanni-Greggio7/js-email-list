// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
// Buon Lavoro

// fetch("https://flynn.boolean.careers/exercises/api/random/mail", {method: "GET"})
// .then(response => response.json())
// .then(data => {
//     console.log(data.response)

// } )


let list = document.getElementById("list")
let btn = document.getElementById("btn")

function generaEmail (){
    for (i = 0; i < 10; i++) {

        fetch("https://flynn.boolean.careers/exercises/api/random/mail", { method: "GET" })
            .then(response => response.json())
            .then(data => {

                console.log(data.response)
                list.innerHTML +=
                
                <li>
                ${data.response}                
                </li>
                
            })
            .catch (error => {
                console.error(error)
            })
    }
}

generaEmail ()

btn.addEventListener ('click', function (){
    list.innerHTML = ""
    generaEmail ()
})