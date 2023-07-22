import "./navbar.css"
import {tabellaListaCategorie} from '../tabellaListaCategorie/tabellaListaCategorie.js';
import {subNavbar} from "./subNavbar/subNavbar.js"
import { settaAccediEsci } from "./../registerForm/effettuaLogin.js";
function navbar() {
    
    const contenuto = `
    <nav class="navbar-principale">
        <div>
            <h1 id="paroleEPensieri">parole e pensieri</h1>
        </div>
        <div class="info">
            <input type ="text" placeholder="cerca"/>
            <div class="social">
                <h4>seguici sui social</h4>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>    
            <div class="register-area">
                <a href ="../../../paginaUtente.html"> <i class="fa fa-user" aria-hidden="true"></i></a>
                <div>
                <a id = "registrati-btn" href="../../../registrati.html"> registrati </a>
                <button id = "accedi-btn"> 
                </button>
                </div>
            </div>
        </div>
    </nav>` 


    let  navbar = document.createElement("div") ;
    navbar.innerHTML = contenuto ;
    const subNavbarCont = subNavbar() ;
    navbar.appendChild(subNavbarCont) ;
    document.body.appendChild(navbar) ;

    

    //effettua Login o accedi a seconda se l'utente è registrato oppure no
    document.querySelector("#accedi-btn").addEventListener("load",settaAccediEsci()) ;
    
    //lista in tabella dopo aver cliccato una categoria
    let listaSubMenu = document.querySelectorAll(".subMenuCont > li") ;
    listaSubMenu.forEach(item => item.addEventListener("click", tabellaListaCategorie));
    
    //mostra il subsubmenu e muove il quadratino
    let list = document.querySelectorAll(".subNavbar .subMenu > li > a") ;
    let quadratinoDinamico = document.querySelector(".subNavbar .quadratinoIndicatore") ;
    let listaSubMenuCont = document.querySelectorAll(".subMenu > li .subMenuCont") ;
    listaSubMenuCont[0].style.display="flex" ;
    list.forEach((item,index)=>{
        item.addEventListener("mouseover",(e)=> {
            if(index == 0) {
                
                quadratinoDinamico.style.left = "15%" ;
                togliSubMenuCont(listaSubMenuCont) ;
                listaSubMenuCont[0].style.display= "flex" ;
            }if(index == 1) {
                
                quadratinoDinamico.style.left = "36%" ;
                togliSubMenuCont(listaSubMenuCont) ;
                listaSubMenuCont[1].style.display= "flex" ;
            }if(index == 2) {
                
                quadratinoDinamico.style.left = "57%";
                togliSubMenuCont(listaSubMenuCont) ;
                listaSubMenuCont[2].style.display = "flex" ;
            }if(index == 3) {
                
                quadratinoDinamico.style.left = "75%" ;
                togliSubMenuCont(listaSubMenuCont) ;
                listaSubMenuCont[3].style.display= "flex" ;
            }if(index == 4) {
                
                quadratinoDinamico.style.left = "92%" ;
                togliSubMenuCont(listaSubMenuCont) ;
                listaSubMenuCont[4].style.display= "flex" ;
                
            }
        }) ;
        
    })
    function togliSubMenuCont(listaSubMenuCont){
        listaSubMenuCont.forEach((item)=> item.style.display ="none") ;
    }

};
export {navbar}