import { doc, addDoc, collection,getDocs} from 'firebase/firestore/lite';
import { refCollCategoria } from '../../configurazioneFirebase';
import {listaCommenti} from './listaCommenti.js';
async function commenta(id,categoria,sottoCategoria,textareaValue, nickNameValue ){
    if(categoria == "Frasi")categoria = "Frasi&Aforismi" ;
   
    const refDoc = doc(refCollCategoria,categoria,sottoCategoria,id) ;
    
    await addDoc(collection(refDoc,"commenti"),{
        nickName : nickNameValue,
        commento : textareaValue,
        data: new Date().toLocaleDateString()
    });

    //rimpiazzo la lista col nuovo commento
    const div = await listaCommenti(id,categoria,sottoCategoria) ;
    
    const daSostituire = document.querySelector(".listaCommenti") ;
    console.log(daSostituire) ; 
    document.querySelector("#listaCommenti").replaceChild(div, daSostituire)

}


async function listaCommentiPerPoesia(id,categoria,sottoCategoria,){
    if(categoria == "Frasi")categoria = "Frasi&Aforismi" ;
    const refDoc = doc(refCollCategoria,categoria,sottoCategoria,id) ;

    let listaCommenti = await getDocs(collection(refDoc,"commenti")) ;
    return listaCommenti ;
}
export{commenta,listaCommentiPerPoesia} ;