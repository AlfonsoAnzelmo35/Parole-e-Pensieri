import { listaCommentiPerPoesia } from "./commenta.js";
async function listaCommenti(id,categoria,sottoCategoria){
    let comments = await listaCommentiPerPoesia(id,categoria,sottoCategoria) ;
    
    let div = document.createElement("div") ;
    div.style.paddingLeft = "20px" ;div.style.paddingTop = "20px" ;
    div.className = "listaCommenti commento" ;
    comments.forEach(it => { 
      mostraCommento(div,it) ;
    }) ;
    return div ;
  }

  function mostraCommento(div,it){
    let h3 = document.createElement("h3") ;
    h3.style.fontWeight ="lighter"
    let spanData = document.createElement("span") ;
    spanData.style.marginRight = "30px" ;
    let spanNickName = document.createElement("span") ;
    
    spanData.innerText = it.data().data ;
    spanNickName.innerHTML += it.data().nickName ;
    h3.innerHTML += it.data().commento ;
    
    div.appendChild(spanData) ;
    div.appendChild(spanNickName) ;
    div.appendChild(h3) ;
  }

  export {listaCommenti,mostraCommento}