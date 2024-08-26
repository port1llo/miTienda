import {items} from "../mock/mockData";
import {db} from "../../firebase/dbConnection";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";

const Footer = () => {
    const addProducts = () =>{
        const producstCollection = collection (db, "productos");
   
        items.forEach((item)=>{
         addDoc(producstCollection, item)
        .then(doc=>{
        console.log("Prodcuto agregado con ID: ",doc.id)
        })
        .catch(error => {
        console.error("Error al agregar el Prodcuto: ", error)})
        })
    }
    
    return (
        <footer>
            <button onClick={addProducts}>agregar prodcutos a base de datos</button>
        </footer>);
        
    };

    export default Footer;