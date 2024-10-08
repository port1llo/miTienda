import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import styles from"./ItemListContainer.module.css";
import { useState, useEffect } from "react";
import{db} from "../../firebase/dbConnection";
import {collection, getDocs, query, where} from "firebase/firestore";
import {useParams} from "react-router-dom";
import { Spinner } from "../spinner/spinner";
import {useCartContext} from "../../context/CartContext";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);
    const {titulo} = useCartContext ();

    let titleToShow = titulo;

    useEffect(() => {
       setLoading(true);
       
        let productsCollection = collection(db, "productos")
       
        if (categoryId) {
            productsCollection = query (productsCollection, where ("category", "array-contains", categoryId));
            } 
                getDocs(productsCollection)
                .then (({docs})=> {
                 const prodFromDocs = docs.map((doc) => ({
                     id: doc.id,
                     ...doc.data()
                 }))
                 setProducts(prodFromDocs)
                 setLoading(false);
                })
                .catch((error) => {
                 console.log("ERROR", error);
                });

        }, [categoryId]);   
   
   
    return (
       <>
        <div className= {styles.container} >
            <div >{titleToShow}</div>
            {loading
                ? <Spinner/> 
                : <ItemList products={products}/> }
            </div>
        </> 
    );
};
export default ItemListContainer;
