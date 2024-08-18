import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import styles from"./ItemListContainer.module.css";
import { useState, useEffect } from "react";
import { getProducts } from "../utils/fetchData";

const ItemListContainer =({title}) => {
    const [products, setProducts] = useState([]);
    const[cat, setCat] =useState ("interior");
  
useEffect(() =>{
    console.log("Se monto el componente");
    getProducts (cat) 
    .then((res) => { 
        console.log("se ejecuto la promesa");
        setProducts(res);
    })
    .catch((err) =>{
        console.log(err);
    })
    .finally(() =>{ 
        console.log("finalizo la promesa");
    });
   
},[cat]);    
   
   
    return (
        <>
                <button onClick={() => setCat("interior")}>Set Cat = Interior</button>
                <button onClick={() => setCat("exterior")}>Set Cat = Exterior</button>
                <button onClick={() => setCat("invierno")}>Set Cat = Invierno</button>
                <button onClick={() => setCat("verano")}>Set Cat = Verano</button>
        <div className= {styles.container} >
            <ItemList products={products}/> 
            <div >{title}</div>;
            <ItemCount/>
            </div>
        </> 
    );

};
export default ItemListContainer;
