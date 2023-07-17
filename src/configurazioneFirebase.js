import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5OUJOoPr2me9GEJE0Qgv-DqW9_aCXFzc",
  authDomain: "poeti-alla-riscossa.firebaseapp.com",
  projectId: "poeti-alla-riscossa",
  storageBucket: "poeti-alla-riscossa.appspot.com",
  messagingSenderId: "555373361267",
  appId: "1:555373361267:web:94469ad76d602cbb009206"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//referenza al servizio firestore
const database = getFirestore(app) ;
//si farà spesso riferimento alla stessa collezione
const refCollCategoria = collection(database,"categoria") ;
const categoriePrincipali = getDocs(refCollCategoria) ;

const auth = getAuth(app) ;

export {database, refCollCategoria, categoriePrincipali, auth} ;
