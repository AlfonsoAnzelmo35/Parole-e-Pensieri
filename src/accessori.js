

//rimuov tutti gli elementi dal body
function rimuoviTuttiGliElementiDaBody(elementi){
    
    let children = elementi ;
  
    for(let i = 0 ; i < children.length ; i++){
       
        if(children[i] != null)
            try{
                document.body.removeChild(children[i]) ;
            }catch(error){//non tutti i nodi sono figli di body
                children[i].remove()
            }
        }
}


//rimuovi dopo 3 secondi tutti i messaggi visivi
function rimuoviMostraAutenticazione(){
    setTimeout(()=>{
    document.querySelectorAll(".div-mostraAutencazione").forEach(it => document.body.removeChild(it))
    },3000) ;
}

export{rimuoviMostraAutenticazione,rimuoviTuttiGliElementiDaBody}