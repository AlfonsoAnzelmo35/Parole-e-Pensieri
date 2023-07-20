import { updateProfile } from "firebase/auth";
import { rimuoviMostraAutenticazione, rimuoviTuttiGliElementiDaBody } from "../../accessori";
import { auth, refCollCategoria } from "../../configurazioneFirebase";
import './ScriviPoesia.css';
import { addDoc, getDocs } from "firebase/firestore/lite";
import { mostraAutenticazione } from "../registerForm/effettuaLogin";


async function scriviPoesia(){
    
    rimuoviTuttiGliElementiDaBody([document.querySelector(".indice")])

    let div = document.createElement("div") ;
    div.className = "scriviPoesia-container"
    
    let firstChildDiv = document.createElement("div") ;
    firstChildDiv.className = "firstChildDiv" ;
    let textarea = document.createElement("textarea") ;
    textarea.placeholder = "scrivi la tua poesia - pensiero" ;
    firstChildDiv.appendChild(textarea) ;  

    let secChildDiv = document.createElement("div") ;
    secChildDiv.className="secChildDiv" ;
    let select = await caricaCategorie() ;
    secChildDiv.appendChild(select)

    let button = document.createElement("button") ;
    button.textContent = "SCRIVI!" ;
    button.className="button";
    button.addEventListener("click",()=> scrivi(select.value,textarea.value))
    secChildDiv.appendChild(button) ;
     
    div.appendChild(firstChildDiv) ;
    div.appendChild(secChildDiv) ;
    document.body.appendChild(div) ;  

}
async function caricaCategorie(){
    let categorie = await getDocs(refCollCategoria) ;
    let select = document.createElement("select") ;
    select.ariaLabel = "selectCategorie" ;
    select.className = "selectCategorie"
    categorie.forEach(it =>{ 
        let option = document.createElement("option") ;
        option.value = it.id ;
        option.text = it.id ; 
        select.appendChild(option)   
    }) ;
    
    return select ;
}
function scrivi(selectValue,textareaValue){
    if(textareaValue == "" || textareaValue.lenght == 0){
        mostraAutenticazione(window.scrollY,"scrivi un tuo pensiero :D!") ;
        rimuoviMostraAutenticazione() ;
        return ;
    }
    let testo = document.querySelector(".scriviPoesia-container textarea").value ;
    
    const obj = {
        "autore": auth.currentUser.displayName,
        "testo" : testo ,
        "addedAt" :Date.now()
    }
   // addDoc(refCollCategoria,selectValue,)
    
}

export {scriviPoesia}