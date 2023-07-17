import "./corpo.css" ;
import libri from "./images/libri.jpeg"
import dante from "./images/dante.jpeg"
import categoria from "./images/categoria.jpeg"

function corpo(){
    let contenuto = `
        <div class="links">
            <div class="link-veloce"><img src =${categoria}/></div>
            <div class="link-veloce"><img src =${dante}/></div>
            <div class="link-veloce"><img src =${libri}/></div>      
        </div>
        <div class="indice">
            questo e' l'indice
        </div>
        ` ;

    let div = document.createElement("div") ;
    div.className = "corpo" ;
    div.innerHTML = contenuto ;
    document.body.appendChild(div) ;   
}

export {corpo} ;