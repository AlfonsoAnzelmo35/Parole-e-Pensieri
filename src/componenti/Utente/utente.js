import { collection, getDocs, query ,where } from "firebase/firestore/lite";
import { auth, refCollCategoria } from "../../configurazioneFirebase";
import { mostraPoesieComponente } from "../MostraPoesieComponente/mostraPoesieComponente";
import './utente.css';
import { onAuthStateChanged } from "firebase/auth";

async function utente(){
    let div = document.createElement("div") ;
    div.className = "utente" ;
    document.querySelector(".indice").innerHTML = "<h2>le tue poesie</h2>" ;

    let divInfoPersonali = document.createElement("div") ;
    divInfoPersonali.className = "InfoPersonali" ;
    await ottieniDatiutente(divInfoPersonali) ;


    let divPoesiaPubblicate = document.createElement("div") ;
    divPoesiaPubblicate.className = "PoesiaPubblicate" ;
    await ottieniPoesiePerUtente(divPoesiaPubblicate) ;

    div.appendChild(divPoesiaPubblicate) ;
    div.appendChild(divInfoPersonali) ;
    document.body.appendChild(div)
}

async function ottieniPoesiePerUtente(div){
    
   let listaCategorie = await getDocs(refCollCategoria) ;
    
    listaCategorie.forEach(sottoCategoria =>
        sottoCategoria.data().sottoCategorie.forEach(stringaSottoCategorie => {
           
            const q = query(collection(refCollCategoria,sottoCategoria.id,stringaSottoCategorie),where("idUtente", "==", auth.currentUser.uid)) ;

            getDocs(q).then((snap)=>{
                snap.forEach(item =>{
                    const mostraPoesia = mostraPoesieComponente(sottoCategoria.id,stringaSottoCategorie,item.id,item.data().addedAt,item.data().autore,item.data().daFilm,item.data().testo)
                    div.appendChild(mostraPoesia)
                })
            })



     }))
}
//se arriva ad ottenere queste informazioni è sicuramente già loggato
async function ottieniDatiutente(div){

    let h3 = document.createElement("h3") ;
   
    
    onAuthStateChanged(auth , user=>{
        h3.innerHTML += "Nome " + user.displayName  + "<br/>";
        h3.innerHTML += "Email "  + user.email ;   
    }) 
    div.appendChild(h3) ;
    
}

export {utente}