import "./subNavbar.css"


function subNavbar() {
    
    const contenuto = `    
    <nav class="subNavbar">
        <i class="fa-sharp fa-solid fa-house"></i>
        <ul class = "subMenu">
            <li> <a href="#" class="subMenuLink"> TUTTE LE POESIE </a>
                <ul class="subMenuCont">
                    <li><a href="#" >Frasi & Aforismi</a>
                        <ul class="sub-subMenuCont">
                            <li><a href="#">Frasi & Aforismi<br/><span>Seleziona l'argomento tra quelli proposti</span></a></li>
                            <li><a href="#">Amicizia [3990]</a></li>
                            <li><a href="#">Amore [35753]</a></li>
                            <li><a href="#">Arte [1875]</a></li>
                            <li><a href="#">Comportamento [26312]</a></li>
                            <li><a href="#">Dillo in sei parole [942]</a></li>
                            <li><a href="#">Filosofia [4855]</a></li>
                            <li><a href="#">Frasi Belle [341]</a></li>
                            <li><a href="#">Viaggi e vacanze [775]</a></li>
                            <li><a href="#">Frasi in Latino [572]</a></li>
                            <li><a href="#">Frasi in lingua straniera [796]</a></li>
                            <li><a href="#">Ipse dixit [436]</a></li>
                            <li><a href="#">Libri [4068]</a></li>
                            <li><a href="#">Luoghi comuni [930]</a></li>
                            <li><a href="#">Musica [2033]</a></li>
                            <li><a href="#">Palindromi [374]</a></li>
                            <li><a href="#">Personaggi famosi [1847]</a></li>
                            <li><a href="#">Religione [3519]</a></li>
                            <li><a href="#">Frasi Sagge [16618]</a></li>
                            <li><a href="#">Spot Pubblicitari [595]</a></li>
                            <li><a href="#">Stati d'Animo [17528]</a></li>
                            <li><a href="#">Vita [27636]</a></li>
                            <li><button>vedi tutti gli argomenti</button></li>
                        </ul>
                    </li>
                    <li><a href="#">Indovinelli</a></li>
                    <li><a href="#">Poesie</a>
                        <ul class="sub-subMenuCont">
                            <li><a href="#">Poesie<br/><span>Seleziona l'argomento tra quelli proposti</span></a></li>
                            <li><a href="#">Acrostico [227]</a></li>
                            <li><a href="#">Filastrocche [372]</a></li>
                            <li><a href="#">Haiku [1886]</a></li>
                            <li><a href="#">Poesie anonime [1065]</a></li>
                            <li><a href="#">Poesie catartiche [447]</a></li>
                            <li><a href="#">Poesie criptiche [452]</a></li>
                            <li><a href="#">Poesie d'Autore [8376]</a></li>
                            <li><a href="#">Poesie generazionali [4909]</a></li>
                            <li><a href="#">Poesie in lingua straniera [1088]</a></li>
                            <li><a href="#">Poesie personali [32649]</a></li>
                            <li><a href="#">Poesie vernacolari [897]</a></li>
                            <li><a href="#">Tanka [228]</a></li>
                            <li><button>vedi tutti gli argomenti</button></li>
                        </ul>
                    </li>
                    <li><a href="#">Frasi di Film</a>
                        <ul class="sub-subMenuCont">
                            <li><a href="#">Frasi di Film<br/><span>Seleziona l'argomento tra quelli proposti</span></a></li>
                            <li><a href="#">Animazione [729]<a></li>
                            <li><a href="#">Azione [981]</a></li>
                            <li><a href="#">Commedia [2238]</a></li>
                            <li><a href="#">Drammatico [2500]</a></li>
                            <li><a href="#">Guerra [1]</a></li>
                            <li><a href="#">Romantico [949]</a></li>
                            <li><a href="#">Soap Opera [21]</a></li>
                            <li><a href="#">Telefilm [2649]</a></li>
                            <li><button>vedi tutti gli argomenti</button></li>
                        </ul>
                    </li>
                    

                    <li><a href="#">Umorismo</a>
                        <ul class="sub-subMenuCont">
                            <li><a href="#">Umorismo<br/><span>Seleziona l'argomento tra quelli proposti</span></a></li>
                            <li><a href="#">Bestiario scolastico [82]</a></li>
                            <li><a href="#">Carabinieri [112]</a></li>
                            <li><a href="#">Charles Bronson [29]</a></li>
                            <li><a href="#">Chuck Norris [1882]</a></li>
                            <li><a href="#">Colmi [220]</a></li>
                            <li><a href="#">Epitaffi [103]</a></li>
                            <li><a href="#">Gaffe e papere famose [119]</a></li>
                            <li><a href="#">Giochi di parole [527]</a></li>
                            <li><a href="#">Giustificazioni [193]</a></li>
                            <li><a href="#">Ingegneri [87]</a></li>
                            <li><a href="#">Mc Gyver [48]</a></li>
                            <li><a href="#">Note Disciplinari [901]</a></li>
                            <li><a href="#">Notizie e annunci [236]</a></li>
                            <li><a href="#">Notizie false [165]</a></li>
                            <li><a href="#">Orrori ortografici [185]</a></li>
                            <li><a href="#">Reno Raines [106]</a></li>
                            <li><a href="#">Satira [619]</a></li>
                            <li><a href="#">Scherzi telefonici [22]</a></li>
                            <li><a href="#">Supercar [190]</a></li>
                            <li><a href="#">Ultime parole famose [191]</a></li>
                            <li><button>vedi tutti gli argomenti</button></li>
                        </ul>
                    </li>
                    <li><a href="#">Racconti</a>
                        <ul class="sub-subMenuCont">
                        <li><a href="#">Racconti<br/><span>Seleziona l'argomento tra quelli proposti</span></a></li>
                            <li><a href="#">Aneddoti [96]</a></li>
                            <li><a href="#">Anonimo [56]</a></li>
                            <li><a href="#">Biografia [274]</a></li>
                            <li><a href="#">Classico [24]</a></li>
                            <li><a href="#">Drammatico [158]</a></li>
                            <li><a href="#">Fiaba & novella [390]</a></li>
                            <li><a href="#">Giallo [15]</a></li>
                            <li><a href="#">Horror [45]</a></li>
                            <li><a href="#">Incipit [108]</a></li>
                            <li><a href="#">Mini racconti [2241]</a></li>
                            <li><a href="#">Narrativo [450]</a></li>
                            <li><a href="#">Personale [2240]</a></li>
                            <li><a href="#">Romantico [464]</a></li>
                            <li><a href="#">Romanzo [295]</a></li>
                            <li><a href="#">Saggio [502]</a></li>
                            <li><a href="#">Thriller [27]</a></li>
                            <li><a href="#">Umoristico [118]</a></li>
                            <li><button>vedi tutti gli argomenti</button></li>
                        </ul>
                    </li>
                    <li><a href="#">Legge di Murphy</a></li>
                    <li><a href="#">Frasi per ogni occasione</a>
                        <ul class="sub-subMenuCont"  style="right: 50px;">
                            <li><a href="#">Frasi per ogni occasione<br/><span>Seleziona l'argomento tra quelli proposti</span></a></li>
                            <li><a href="#">Auguri di Buon Anno [638]</a></li>
                            <li><a href="#">Compleanno [665]</a></li>
                            <li><a href="#">Matrimonio [192]</a></li>
                            <li><a href="#">Auguri di Buon Natale [1685]</a></li>
                            <li><a href="#">Auguri di Pasqua [312]</a></li>
                            <li><a href="#">Auguri per la guarigione [61]</a></li>
                            <li><a href="#">Anniversari [172]</a></li>
                            <li><a href="#">Frasi per la Festa del Papà [278]</a></li>
                            <li><a href="#">Frasi per la Festa della Mamma [591]</a></li>
                            <li><a href="#">Laurea o Diploma [64]</a></li>
                            <li><a href="#">Frasi per San Valentino [1901]</a></li>
                            <li><a href="#">Frasi di Addio [1290]</a></li>
                            <li><a href="#">Frasi di Scuse [285]</a></li>
                            <li><a href="#">Frasi per Condoglianze [163]</a></li>
                            <li><a href="#">Frasi per dire "mi manchi" [2088]</a></li>
                            <li><a href="#">Buongiorno [3715]</a></li>
                            <li><a href="#">Buonanotte [2584]</a></li>
                            <li><a href="#">Ringraziamenti [396]</a></li>
                            <li><a href="#">Frasi tristi [2844]</a></li>
                            <li><a href="#">Frasi TVB [11222]</a></li>
                            <li><a href="#">Onomastico [46]</a></li>
                            <li><button>vedi tutti gli argomenti</button></li>
                        </ul>
                    </li>
                    
                    <li><a href="#">Proverbi</a>
                        <ul class="sub-subMenuCont"  style="right: 100px;">
                            <li><a href="#">Proverbi<br/><span>Seleziona l'argomento tra quelli proposti</span></a></li>
                            <li><a href="#">Proverbi abruzzesi [164]</a></li>
                            <li><a href="#">Proverbi africani [139]</a></li>
                            <li><a href="#">Proverbi anglo-americani [149]</a></li>
                            <li><a href="#">Proverbi bresciani [389]</a></li>
                            <li><a href="#">Proverbi calabresi [170]</a></li>
                            <li><a href="#">Proverbi cilentani [175]</a></li>
                            <li><a href="#">Proverbi cinesi [518]</a></li>
                            <li><a href="#">Proverbi corsi [175]</a></li>
                            <li><a href="#">Proverbi emiliani [247]</a></li>
                            <li><a href="#">Proverbi friulani [86]</a></li>
                            <li><a href="#">Proverbi tedeschi [119]</a></li>
                            <li><a href="#">Proverbi inglesi [88]</a></li>
                            <li><a href="#">Proverbi italiani [2774]</a></li>
                            <li><a href="#">Proverbi Lariano [264]</a></li>
                            <li><a href="#">Proverbi lombardi [101]</a></li>
                            <li><a href="#">Proverbi marchigiani [141]</a></li>
                            <li><a href="#">Proverbi milanesi [116]</a></li>
                            <li><a href="#">Proverbi napoletani [371]</a></li>
                            <li><a href="#">Proverbi piemontesi [390]</a></li>
                            <li><a href="#">Proverbi pugliesi [169]</a></li>
                            <li><a href="#">Proverbi romaneschi [102]</a></li>
                            <li><a href="#">Proverbi sardi [214]</a></li>
                            <li><a href="#">Proverbi siciliani [239]</a></li>
                            <li><a href="#">Proverbi veneti [204]</a></li>
                            <li><button>vedi tutti gli argomenti</button></li>
                        </ul>
                    </li>
                    <li><a href="#">Diario</a>
                        <ul class="sub-subMenuCont"  style="right: 50px;">
                            <li><a href="#">Preghiere<br/><span>Seleziona l'argomento tra quelli proposti</span></a></li>
                            <li><a href="#">Pensieri [6483]</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Preghiere</a>
                        <ul class="sub-subMenuCont" style="right: 0;">
                            <li><a href="#">Preghiere<br/><span>Seleziona l'argomento tra quelli proposti</span></a></li>
                            <li><a href="#">Preghiere a Dio [50]</a></li>
                            <li><a href="#">Preghiere a Gesù [29]</a></li>
                            <li><a href="#">Preghiere alla Madonna [29]</a></li>
                            <li><a href="#">Preghiere per la guarigione [6]</a></li>
                            <li><a href="#">Preghiere per la Pasqua [8]</a></li>
                            <li><a href="#">Preghiere per pregare [42]</a></li>
                            <li><button>vedi tutti gli argomenti</button></li>
                        </ul>
                    </li>
                </ul>     
            </li>
        </ul>
        <ul class = "subMenu">
            <li> <a href="#" class="subMenuLink"> FRASI E POESIE PIÙ BELLE </a>
                <ul class="subMenuCont">
                    <li><a href="#">Frasi & Aforismi</a></li>
                    <li><a href="#">Poesie </a></li>
                    <li><a href="#">Frasi di Film</a></li>
                    <li><a href="#">Umorismo</a></li>
                    <li><a href="#">Racconti</a></li>
                    <li><a href="#">Frasi per ogni occasione</a></li>
                    <li><a href="#">Proverbi</a></li>
                    <li><a href="#">Diario</a></li>
                    <li><a href="#">Preghiere</a></li>
                </ul>     
            </li>
        </ul>
        <ul class = "subMenu">
            <li> <a href="#" class="subMenuLink"> FILM E CINEMA  </a>
                <ul class="subMenuCont">
                    <li><a href="#">News e curiosità</a></li>
                    <li><a href="#">Film in arrivo</a></li>
                    <li><a href="#">Film al cinema</a></li>
                    <li><a href="#">Tutti i film</a></li>
                    <li><a href="#">Box Office</a></li>
                    <li><a href="#">Frasi di Film</a></li>
                    <li><a href="#">News e curiosità</a></li>                 
                </ul>     
            </li>
        </ul>
        <ul class = "subMenu">
            <li> <a href="#" class="subMenuLink"> IMMAGINI CON FRASI   </a>
                <ul class="subMenuCont">
                    <li><a href="#">Frasi & Aforismi</a></li>
                    <li><a href="#">Indovinelli</a></li>
                    <li><a href="#">Poesie</a></li>
                    <li><a href="#">Frasi di Film</a></li>
                    <li><a href="#">Umorismo</a></li>
                    
                </ul>     
            </li>
        </ul>
        <ul class = "subMenu">
            <li> <a href="#" class="subMenuLink"> MAGAZINE   </a>
                <ul class="subMenuCont">
                    <li><a href="#">Prima Pagina</a></li>
                    <li><a href="#">Più in vista</a></li>
                    <li><a href="#">Classifiche</a></li>
                    <li><a href="#">Attualità</a></li>
                    <li><a href="#">Moda e Tendenze</a></li>
                    <li><a href="#">Cucina</a></li>
                    <li><a href="#">Tempo Libero</a></li>
                </ul>        
            </li>
        </ul>
       
        <div class="quadratinoIndicatore"></div>
    </nav>`

    let  subNavbar = document.createElement("div") ;
    
    subNavbar.innerHTML = contenuto ;
    return subNavbar ;
};
export {subNavbar}