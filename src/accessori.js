import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./configurazioneFirebase";


//altrimenti rimane come aver eseguito l'accesso nonostante chiuda il broswer o la pagina
/*window.addEventListener('beforeunload',() =>{ 
   
    signOut(auth).then(()=>{
        
    }).catch((error)=>{
        
    }) ;    
});*/

//rimuovi dopo 3 secondi tutti i messaggi visivi
function rimuoviMostraAutenticazione(){
    setTimeout(()=>{
    document.querySelectorAll(".div-mostraAutencazione").forEach(it => document.body.removeChild(it))
    },3000) ;
}

export{rimuoviMostraAutenticazione}