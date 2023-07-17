import "./mostraPoesieComponente.css" ;
import {salvaPreferiti} from "./salvaPreferiti.js"
import cerchiovuoto from "./cerchio.png";
function mostraPoesieComponente(categoria,sottoCategoria,id,data, autore,daFilm, testo){
    let contenuto = `
        
        <span>${data}</span> ,
        <span>${daFilm == undefined ? autore : daFilm}</span> 
        <i class="fa fa-bookmark" aria-hidden="true"></i>
        <a href="../../../commenta.html?categoria=${categoria}&sottoCategoria=${sottoCategoria}&id=${id}&autore=${autore}&data=${data}&daFilm=${daFilm}&testo=${testo}" class="button">commenta</a>
        <h1><!--come sapere se � è una à una ò una è un'altra lettera accentata?-->
            ${testo!= undefined ?testo.replaceAll("�","a") : ""}
        </h1>
        <button class="button">condividi</button>
        <p >scarsa</p>   
        <div class="areaVoto voto0">
            <img src=${cerchiovuoto}/>
            
        </div>` ;
 
    
    let div = document.createElement("div") ;
    div.innerHTML = contenuto ;
    div.className = "poesie-container" ;
    //areaVoto
    div.lastChild.addEventListener("mousemove",vota) ;
    div.querySelector("i").addEventListener("click",()=>salvaPreferiti(categoria,sottoCategoria,id)) ;
    
    //considerazione
    let p = div.children[6];
    
    function vota(e){
       
        if(e.offsetX < 40){
            rimuoviTuttiVoto() ;
            div.lastChild.classList.add("voto1") ;
            
            p.textContent = "scarsa";
        }if(e.offsetX < 80 && e.offsetX > 40){
            rimuoviTuttiVoto() ;
            div.lastChild.classList.add("voto2") ;
            p.textContent = "niente di speciale";
        }if(e.offsetX < 120 && e.offsetX > 80){
            rimuoviTuttiVoto() ;
            div.lastChild.classList.add("voto3") ;
            p.textContent = "niente di speciale";
        }if(e.offsetX < 160 && e.offsetX > 120){
            rimuoviTuttiVoto() ;
            div.lastChild.classList.add("voto4") ;
            p.textContent = "degna di nota";
        }if(e.offsetX < 200 && e.offsetX > 160){
            rimuoviTuttiVoto() ;
            div.lastChild.classList.add("voto5") ;
            p.textContent = "bella";
        }

    }
    function rimuoviTuttiVoto(){
        div.lastChild.classList.remove("voto1") ;
        div.lastChild.classList.remove("voto2") ;
        div.lastChild.classList.remove("voto3") ;
        div.lastChild.classList.remove("voto4") ;
        div.lastChild.classList.remove("voto5") ;

    }
    return div ;
}

export{mostraPoesieComponente} ;