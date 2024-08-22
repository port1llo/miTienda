import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../utils/fetchData";
import { Spinner } from "../spinner/spinner";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState ({});
    const [loading, setLoading] = useState (true);
    const {id} = useParams();
    
    useEffect (() => {
    setLoading(true);
    getProductById (id)     
    .then((res) => { 
       setProducts(res);
    })
    .catch((err) =>{
        console.log(err);
    })
    .finally(() =>{ 
        setLoading(false);
    });
   
},[id]);    
   

   return (
    <main>
   
    <div >ItemDetailContainer</div>;
{loading
   ? <Spinner/> 
   : <ItemDetail products={products}/> }
  
</main> 
    )
}
export default ItemDetailContainer;