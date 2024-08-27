import {items} from "../mock/mockData";
import {db} from "../../firebase/dbConnection";
import { collection, addDoc } from "firebase/firestore";
import styles from "./footer.module.css";

const Footer = () => {
    const addProducts = () =>{
        const productsCollection = collection (db, "productos");
   
        items.forEach((item)=>{
         addDoc(productsCollection, item)
        .then(doc=>{
        console.log("Prodcuto agregado con ID: ",doc.id)
        })
        .catch(error => {
        console.error("Error al agregar el Prodcuto: ", error)})
        })
    }
    
    return (
        <footer className= {styles.container}>
            <button onClick={addProducts}>agregar prodcutos a base de datos</button>
        </footer>);
        
    };

    export default Footer;