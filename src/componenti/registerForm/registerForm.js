import { auth } from "../../configurazioneFirebase";
import { login, mostraAutenticazione } from "./effettuaLogin";
import { createUserWithEmailAndPassword,onAuthStateChanged, updateProfile  } from "firebase/auth";
import "./registerForm.css" ;
async function registerForm(){
    
    let div = document.createElement("div") ;
    div.className = "poesie-container register-form" ;

    let contenuto = `
        <h1>Benvenuto</h1>
        <h3>Completa la registrazione a PensieriParole e diventa subito Autore!</h3>
        <input type = "text" placeholder = "Nome"/>
        <input type = "text" placeholder = "Cognome"/>
        <input type = "email" placeholder = "Email"/>
        <input type = "password" placeholder = "password"/>
        <input type = "password" placeholder = "ripetiPassword"/>
        <button class="button">registrati</button>  
        ` ;

    div.innerHTML = contenuto ;
    document.body.appendChild(div) ;
    

    div.children[7].addEventListener("click",()=>{
        if(controllaCampi(div))
            register(div.children[2].value,div.children[3].value,div.children[4].value,div.children[5].value)
    })
}

function register(nome,cognome,email,password){
    createUserWithEmailAndPassword(auth, email, password)
    .then(risultato=>{
    })
    .catch(error=> {
        if(error.code == "auth/email-already-in-use")
            login() ;
            return ;
    })

    updateProfile(auth.currentUser,{
        displayName:nome,
        displaySurname:cognome
    }).then((ris)=>{
    }).catch((error)=>{
    })
    mostraAutenticazione(window.scrollY,"ti sei appena registrato !") ;
}

function controllaCampi(div){
    if(div.children[5].value.length < 6 || div.children[6].value.length < 6 ){
        mostraAutenticazione(window.scrollY,"la password deve avere almeno 6 catetteri");
        return false ;
    }
    if(div.children[5].value != div.children[6].value){
        mostraAutenticazione(window.scrollY,"le password non corrispondono");
        return false ;
    }
    if(div.children[2].value == "" || div.children[3].value == "" || div.children[4].value == ""){
        mostraAutenticazione(window.scrollY,"campo vuoto");
        return false ;
    }
    if(!div.children[4].value.includes("@")|| !div.children[4].value.includes(".") || div.children[4].value.length <5){
        mostraAutenticazione(window.scrollY,"mail non valida");
        return false ;    
    }
    setTimeout(()=>{
        document.querySelectorAll(".div-mostraAutencazione").forEach(it => document.body.removeChild(it))
    },3000)

    return true ;
}
export {registerForm} ;