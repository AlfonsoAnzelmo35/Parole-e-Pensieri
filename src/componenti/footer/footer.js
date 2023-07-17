import "./footer.css" ;
import ReadAllAbout from './ReadAllAbout.png';
function footer(){

    let contenuto = `
        <div class="hotTags">
        <a href="#">Auguri di Compleanno</a><br/>
        <a href="#">Auguri Natale</a><br/>
        <a href="#">Barzellette</a> <a href="#">Buon Anno 2023</a><br/>
        <a href="#">Frasi Belle </a><a href="#">Frasi<br/>
        Buonanotte </a><a href="#">Frasi <br/>
        Buongiorno </a><a href="#">Frasi <br/>
        d'Amore </a><a href="#">Frasi per <br/>
        dire Ti Amo</a> <a href="#">Frasi<br/>
        Sagge </a><a href="#">Kahlil Gibran </a><br/>
        <a href="#">Matrimonio </a><a href="#">Oscar <br/>
        Wilde </a><a href="#">Stati d'Animo</a><br/>

        </div>
       
        <div class="newLetter">
            <h1>Rimani in contatto con Noi!</h1>
            <p>Per te le migliori frasi e aforismi.<br/>
            Scopri in anteprima i migliori Autori votati dalla Community.</p>
            <button> iscriviti</button><br/>
            <img src=${ReadAllAbout}/>
        </div>
    ` ;
    let div = document.createElement("div") ;
    div.innerHTML = contenuto ;
    div.className="footer" ;
    
    document.body.appendChild(div) ;    

    return contenuto ;
}

export {footer} ;