import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import styles from"./ItemListContainer.module.css";
import { useState, useEffect } from "react";
import { getProducts } from "../utils/fetchData";
import {useParams} from "react-router-dom";
import { Spinner } from "../spinner/spinner";
import {useCartContext} from "../../context/CartContext"

const ItemListContainer =({title}) => {
    const [products, setProducts] = useState([]);
    
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true);
    const {titulo} = useCartContext ();

    let titleToShow = titulo;

    useEffect(() =>{
    console.log("Se monto el componente");
    setLoading(true);
    getProducts (categoryId) 
    .then((res) => { 
        console.log("se ejecuto la promesa");
        setProducts(res);
    })
    .catch((err) =>{
        console.log(err);
    })
    .finally(() =>{ 
        console.log("finalizo la promesa");
        setLoading(false);
    });
   
},[categoryId]);    
   
   
    return (
       
        <>
             {/*   <button onClick={() => setCat("interior")}>Set Cat = Interior</button>
                <button onClick={() => setCat("exterior")}>Set Cat = Exterior</button>
                <button onClick={() => setCat("invierno")}>Set Cat = Invierno</button>
                <button onClick={() => setCat("verano")}>Set Cat = Verano</button> */}
        <div className= {styles.container} >
        <div >{titleToShow}</div>;
        {loading
            ? <Spinner/> 
            : <ItemList products={products}/> }
        <ItemCount/>
            </div>
        </> 
    );

};
export default ItemListContainer;
