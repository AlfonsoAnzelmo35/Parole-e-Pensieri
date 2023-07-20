import { signInWithEmailAndPassword,onAuthStateChanged, setPersistence, browserSessionPersistence, signOut } from "firebase/auth";
import "./effettuaLogin.css" 
import { auth } from "../../configurazioneFirebase";
import { rimuoviMostraAutenticazione } from "../../accessori";

//questo file permette di effetuare il login(che per firebase significa triggherare onAuthStateChanged)
function effettuaLogin(){
        let divPadre = document.createElement("div") ;
        divPadre.className = "divPadre" ;
        
        let moduloLogin = document.createElement("div") ;
        let contenutoModuloLogin = `
            <h2>Accedi al tuo account</h2>
            
            <i class="fa fa-times" aria-hidden="true"></i>
            <form id="formDiAccesso">
                <input type="text" placeholder="e-mail"/>
                <input type="password" placeholder="password"/>
                <div>
                    <a href="#">password dimenticata?</a>
                    <a href="#">iscriviti subito!</a> 
                    <input type="submit" value="accedi">
                </div>
            <form>
        ` ;
        moduloLogin.innerHTML = contenutoModuloLogin
        moduloLogin.className = "moduloLogin" ;

        document.body.classList.add("eliminaScrollBar")
        
        divPadre.appendChild(moduloLogin) ;
        document.body.appendChild(divPadre) ;
        
        
        //chiudi moduloLogin con X 
        document.querySelector(".moduloLogin i").addEventListener("click",()=>chiudiModuloLogin(divPadre)) ;

        //quando il form subisce il submit
        document.querySelector("#formDiAccesso").addEventListener("submit",(e)=>{
            
            e.preventDefault() ;
            const email = document.querySelectorAll(".moduloLogin input")[0] ;
            const password = document.querySelectorAll(".moduloLogin input")[1] ;
            console.log(email.value,password.value)
           
           
            login(divPadre,email.value,password.value) ;
              
            chiudiModuloLogin(divPadre) ;
        }) ;

    }

//esgui login con signInWithEmailAndPassword
async function login(divPadre,email,password){
   
    setPersistence(auth,browserSessionPersistence)
    signInWithEmailAndPassword(auth,email,password).then(userCreditial=>{
        console.log(userCreditial) ;
        mostraAutenticazione(window.scrollY,"accesso eseguito correttamente !") ;
        setTimeout(()=>{
            chiudiShowAuntenticazione(divPadre) ;
        },3000) ;
        
    })
}
function effettuaLogout(){
    signOut(auth) ;
    mostraAutenticazione(window.scrollY,"ti sei disconnesso, ciao ciao")
    rimuoviMostraAutenticazione() ;
}

//chiudi moduloLogin
function chiudiModuloLogin(divPadre){
    document.body.classList.remove("eliminaScrollBar")
    divPadre.remove() ;
}

//solo per un effetto visivo
function mostraAutenticazione(offset, messaggio){
    
    let showAutencazione = document.createElement("div") ;
    showAutencazione.className = "div-mostraAutencazione" ;
    showAutencazione.style.top = `calc(100vh + ${offset}px` ;
    const h3 = document.createElement("h3") ;
    h3.innerText =  messaggio ;
    showAutencazione.appendChild(h3) ;
    
    document.body.appendChild(showAutencazione) ;
    setTimeout(()=>{
        showAutencazione.style.top=`calc(100vh + ${offset}px - 60px)` ;  
        setTimeout(()=>{
            showAutencazione.style.top=`calc(${offset}px + 100vh + 60px)` ;
        },2000) ;
    },500) ;
}
//chimata da X per rimuovere l'elemento mostraAutenticazione
function chiudiShowAuntenticazione(){
    const showAutencazione = document.querySelector("body .div-mostraAutencazione") ;
    document.body.removeChild(showAutencazione) ;
}


//cambia da Accedi a Esci il bottone del navbar a secondo se l'utente è loggato 
function settaAccediEsci(){
    let accedi = document.getElementById("accedi-btn") ;
    
    let navbar = document.querySelector(".navbar-principale") ;
    let ScriviPoesieLink = document.createElement("a") ;
    ScriviPoesieLink.className = "scriviBtn button" ;
    ScriviPoesieLink.href = "../../../scriviPoesia.html" ;
    ScriviPoesieLink.textContent = "SCRIVI UNA POESIA"
    

    onAuthStateChanged(auth,(user)=>{
        if(user){
            //l'utente ha eseguito l'accesso
            let child = navbar.childNodes[2]
            navbar.insertBefore(ScriviPoesieLink,child)
            
            accedi.innerText = "esci"
            document.querySelector("#accedi-btn").addEventListener("click",effettuaLogout) ;
        }else {
            //l'utente non ha ancora eseguito l'accesso
            ScriviPoesieLink.remove()

            accedi.innerText = "accedi"
            document.querySelector("#accedi-btn").addEventListener("click",effettuaLogin) ;
        }   
    })
}




export {effettuaLogin,login,mostraAutenticazione,settaAccediEsci}