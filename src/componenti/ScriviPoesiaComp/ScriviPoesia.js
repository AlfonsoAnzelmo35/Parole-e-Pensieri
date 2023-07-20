
import { rimuoviMostraAutenticazione, rimuoviTuttiGliElementiDaBody } from "../../accessori";
import { auth, refCollCategoria} from "../../configurazioneFirebase";
import './ScriviPoesia.css';
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { mostraAutenticazione } from "../registerForm/effettuaLogin";


async function scriviPoesia(){
    
    document.querySelector(".indice").innerHTML = ""

    let div = document.createElement("div") ;
    div.className = "scriviPoesia-container"
    
    let firstChildDiv = document.createElement("div") ;
    firstChildDiv.className = "firstChildDiv" ;
    let textarea = document.createElement("textarea") ;
    textarea.placeholder = "scrivi la tua poesia - pensiero" ;
    firstChildDiv.appendChild(textarea) ;  

    let secChildDiv = document.createElement("div") ;
    secChildDiv.className="secChildDiv" ;
    let select = await caricaCategorie("") ;
    let SecondoSelect = "" ;
    select.addEventListener("change",async()=>{
         SecondoSelect = await caricaCategorie(select.value) ;
       
        secChildDiv.insertBefore(SecondoSelect,document.querySelector(".secChildDiv button"))
    })
    secChildDiv.appendChild(select)

    

    let button = document.createElement("button") ;
    button.textContent = "SCRIVI!" ;
    button.className="button";
    button.addEventListener("click",()=> scrivi(select.value,SecondoSelect.value,textarea.value,))
    secChildDiv.appendChild(button) ;
     
    div.appendChild(firstChildDiv) ;
    div.appendChild(secChildDiv) ;
    document.body.appendChild(div) ;  

}
async function caricaCategorie(percorso){

    const SecondoSelect = document.querySelectorAll(".selectCategorie");
    console.log(SecondoSelect)
    if(SecondoSelect.length > 1)SecondoSelect[1].remove() ;


    let categorie = await getDocs(refCollCategoria) ;
    
    let select = document.createElement("select") ;
    select.ariaLabel = "selectCategorie" ;
    select.className = "selectCategorie"
    categorie.forEach(it =>{
        if(percorso != ""){
            console.log(percorso)
            if(percorso == it.id){
                it.data().sottoCategorie.forEach(sottocategoria =>{
                let option = document.createElement("option") ;
                option.value = sottocategoria ;
                option.text = sottocategoria ; 
                select.appendChild(option)
            })
        }
        }else{
            let option = document.createElement("option") ;
            option.value = it.id ;
            option.text = it.id ; 
            select.appendChild(option)
        }   
    }) ;
    
    return select ;
}
async function scrivi(selectValue,selectSecondoValue,textareaValue){
    
    if(textareaValue == "" || textareaValue.lenght == 0){
        mostraAutenticazione(window.scrollY,"scrivi un tuo pensiero :D!") ;
        rimuoviMostraAutenticazione() ;
        return ;
    }
    console.log("selectSecondoValue",selectSecondoValue)
    if(selectSecondoValue == "" || selectSecondoValue == undefined){
        mostraAutenticazione(window.scrollY,"scegli una sotto Categoria!") ;
        rimuoviMostraAutenticazione() ;
        return ;
    }


   
    const obj = {
        "autore": auth.currentUser.displayName,
        "testo" : textareaValue ,
        "addedAt" :new Date().toLocaleDateString() 
    }
    await addDoc(collection(refCollCategoria,selectValue,selectSecondoValue),obj) ;
    mostraAutenticazione(window.scrollY,"PUBBLICATA") ;
    rimuoviMostraAutenticazione() ;

}

export {scriviPoesia}