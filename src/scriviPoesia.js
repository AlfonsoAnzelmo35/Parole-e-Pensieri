import {navbar} from "./componenti/navbar/navbar.js" ;
import {footer} from"./componenti/footer/footer.js" ;
import { corpo } from "./componenti/Corpo/corpo";
import {scriviPoesia} from "./componenti/ScriviPoesiaComp/ScriviPoesia.js";
import "./componenti/CommentaSection/CommentaSection.css"

navbar();
corpo() ;
await scriviPoesia() ;
footer() ;