import { doc} from "firebase/firestore/lite";
import {onSnapshot} from "firebase/firestore" 
import { refCollCategoria } from "../../configurazioneFirebase";
import "./../MostraPoesieComponente/mostraPoesieComponente.css" ;
import {mostraPoesieComponente} from './../MostraPoesieComponente/mostraPoesieComponente.js';
import "./CommentaSection.css" ;
import {commenta,listaCommentiPerPoesia} from './commenta.js';
import {listaCommenti} from './listaCommenti.js';



function CommentaSection(){  
  let div = document.createElement("div") ;
  div.className =".poesie-container" ;
  div.setAttribute("id","listaCommenti")

  const params = new URL(window.location).searchParams ;
  const categoria = params.get("categoria") ;
  const sottoCategoria = params.get("sottoCategoria") ;
  const id = params.get("id") ;
  const autore = params.get("autore") ;
  const daFilm = params.get("daFilm") ;
  const data = params.get("data") ;
  const testo = params.get("testo") ;
  
 
  let contenuto = `
    <div class="commento">
      <h1>Commenta</h1>
      <i class="fa fa-user" aria-hidden="true"></i>
      <input type ="text" placeholder ="NickName"/> <br/>
      <textarea rows="8">
      commenta con i tuoi sentimenti piu' veri
      </textarea>
      <button class="button">commenta</button>
      
    </div>`
  let divCommenta = document.createElement("div") ;
  divCommenta.innerHTML = contenuto ;

  div.appendChild(mostraPoesieComponente(categoria,sottoCategoria,id,data,daFilm,autore,testo)) ;
  
  div.appendChild(divCommenta)
  
  document.body.appendChild(div) ;

  //button con funzione commenta
  const buttonCommenta = document.querySelector(".commento button") ;
  buttonCommenta.addEventListener("click",()=>{
    const textarea = document.querySelector(".commento textarea") ;
    const NickName = document.querySelector(".commento input") ;
 
   commenta(id,categoria,sottoCategoria,textarea.value, NickName.value) ;
  }) 

  
  //div listaCommenti ;
  listaCommenti(id,categoria,sottoCategoria).then(divRisultante =>{
    if(divRisultante.innerText!= "")
    div.appendChild(divRisultante) ;
    window.location.reload()
    window.stop()
  }) ;
} 


export {CommentaSection} ;