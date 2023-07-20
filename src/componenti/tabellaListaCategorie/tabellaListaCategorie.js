import {refCollCategoria,categoriePrincipali} from "./../../configurazioneFirebase.js";
import { getDoc,doc,getDocs,collection } from "firebase/firestore/lite";
import "./tabellaListaCategorie.css" ;
import { mostraPoesieComponente } from "../MostraPoesieComponente/mostraPoesieComponente.js";
import { rimuoviTuttiGliElementiDaBody } from "../../accessori.js";

async function tabellaListaCategorie(e){
    rimuoviTuttiGliElementiDaBody([document.querySelector("div.poesie-container.register-form")]) ;

    let categoria = e.target.textContent ;
    //modifica la stringa categoria
    categoria = categoria == "Poesie"?categoria.slice(0,1).toLowerCase() + categoria.slice(1) : categoria.replaceAll(" ", "-");categoria = categoria.replaceAll("di", "");categoria = categoria.replaceAll("--", "-");if(categoria == "Frasi-&-Aforismi")categoria = "Frasi&Aforismi"          
    //documento cateogoria
    const categoriaRef = doc(refCollCategoria,categoria) ;
   
   

    getDoc(categoriaRef).then(risultato =>{
        let arraySottoCategorie = risultato.data().sottoCategorie;
        let tabella = "<table>" ;
        for(let index= 0 ; index < arraySottoCategorie.length ; index+=4){
            if(arraySottoCategorie[index + 0]  == undefined || arraySottoCategorie[index + 1]  == undefined || arraySottoCategorie[index + 2] == undefined || arraySottoCategorie[index + 3] == undefined)
                break ;
           
            tabella += `<tr>
                <td>${arraySottoCategorie[index]}</td>
                <td >${arraySottoCategorie[index + 1]}</td>  
                <td>${arraySottoCategorie[index + 2]}</td>
                <td>${arraySottoCategorie[index + 3]}</td>
            </tr>`;
        }
        tabella+="</table>"
        
        mostraSottoCategorie(categoria,tabella) ;
    });//fine getDoc
    
}


function mostraSottoCategorie(categoria, tabella){
    //setta l'immagine del primo cerchio
    let img = document.querySelector(".link-veloce:nth-child(1) img") ;
    
    
    try {
        img.src = require(`./../navbar/images/${categoria}.jpeg`);
      } catch (error) {
        img.src = require(`./../navbar/images/poesie.jpeg`);
        
      }
      

    //setta le sottocateogira formato tabella
    let divCorpo = document.querySelector(".indice") ;
    divCorpo.innerHTML = tabella;

    //
    let table = document.querySelectorAll("table tr td") ;
    table.forEach(td => {
        if(td != undefined)
            td.addEventListener("click",mostraPoesie)
    })

    function mostraPoesie(e){
        const text = e.target.innerHTML ;
        console.log("text",text)
        if(text== "Frasi & Aforismi")text = "Frasi&Aforismi"
        if(text == "Poesie")text = "poesie"
        
        document.querySelector("table").remove();
        getDocs(collection(refCollCategoria,categoria,text))
        .then(risultato => risultato.forEach(ris => {
            
            document.querySelector(".indice").appendChild(mostraPoesieComponente(categoria, text,ris.id,ris.data().addedAt, ris.data().autore, ris.data().daFilm , ris.data().testo))
            
        })
        )
    }
        
}



export{tabellaListaCategorie} 