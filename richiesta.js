/**questo e' lo script che usa axios e cheerio per fare lo scrape
 * axios per effettuare una richiesta GET
 * cheerio per estarre, trovare nella risposta elementi con una cerca classe o id
 * poi salva creando nuove collezioni in Firebase
 * il sito che ho deciso a cui fare lo scrape e' https://www.pensieriparole.it/poesie/ 
 *
*/
const { default: axios } = require("axios");
const cheerio = require("cheerio");
const FS = require("fs");
const { getDocs, addDoc, collection, doc, deleteDoc } = require("firebase/firestore/lite");
const { database, refCollCategoria } = require("./configurazione-firebase");


//recupero la referenza al documento
async function recuperaSottoCategorie(categoria) {
    let listSottoCategorie = [];
    let risultato = await getDocs(refCollCategoria);
    risultato.forEach(item => {
        if (item.id == categoria) {
            item.data().sottoCategorie.forEach((it) => {

                listSottoCategorie.push(it);
            })
        }
    })
    return listSottoCategorie;
}



async function scriviSuFileGliUrlSottoCategorie(categoria) {
    //ichiesta per ottenere l'url per ogni sottoCategoria
    let html = await axios(`https://www.pensieriparole.it/${categoria}/`) ;
    $ = cheerio.load(html.data) ;
    let url = [] ;
    $(".g-33 a").each((index, el) => {
        url.push($(el).attr("href")) ;
    });
    url.forEach(u => FS.appendFileSync("testo.txt", `https://www.pensieriparole.it${u}\n`)) ;
}



async function carica(categoria) {
    
    let list = await recuperaSottoCategorie(categoria);
    console.log("list",list)
    let data = FS.readFileSync("testo.txt", "utf-8");
    data = data.split("\n");
    for (let i = 0; i < data.length - 1; i++) {
        console.log("i", i);
        let html = await axios(data[i])
        $ = cheerio.load(html.data);
        const poesie = $('.phrase ');
        let obj = []
        poesie.each((index, el) => {
            
            obj[index] = {
                addedAt: $(el).find("time").attr("datetime").slice(0, 10),
                autore: $(el).find(".author").text(),
                testo: $(el).find("blockquote").text()
            };
            addDoc(collection(refCollCategoria, categoria, list[i]), obj[index]).then(ris => ris)   
        });
        console.log(obj);
        
    }
}
let categoria = "Preghiere" ;
//scriviSuFileGliUrlSottoCategorie("preghiere") ;
carica(categoria) ;

