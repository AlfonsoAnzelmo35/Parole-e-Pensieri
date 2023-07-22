import {navbar} from "./componenti/navbar/navbar.js" ;
import {footer} from"./componenti/footer/footer.js" ;
import { corpo } from "./componenti/Corpo/corpo";
import {utente} from "./componenti/Utente/utente.js";
import "./componenti/CommentaSection/CommentaSection.css"

navbar();
corpo() ;
await utente()
footer() ;