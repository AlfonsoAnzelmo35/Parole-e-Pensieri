import {onAuthStateChanged} from "firebase/auth";
import {auth, refCollCategoria} from "../../configurazioneFirebase";
import {effettuaLogin} from './../registerForm/effettuaLogin.js';
import { addDoc, collection } from "firebase/firestore/lite";
function salvaPreferiti(categoria,sottoCategoria,idPoeisia){
    onAuthStateChanged(auth,(user)=>{
        if(user){
            //ha eseguito l'accesso
            console.log(user.uid)
            console.log("te lo faccio salvare") ;
            creaCollezioneUtentiPerPoesia(categoria,sottoCategoria,idPoeisia,user.uid).then(ris => ris);
        }else{
            //non ha eseguito l'accesso
            console.log("devi avere effettuato l'accesso")
            window.scrollTo(0, 0);
            effettuaLogin()
        }
    })
}

async function creaCollezioneUtentiPerPoesia(categoria,sottoCategoria,idPoesia,idUtente){
    await addDoc(collection(refCollCategoria,categoria,sottoCategoria,idPoesia,"utenti"),{idUtente:idUtente})
}

export {salvaPreferiti}