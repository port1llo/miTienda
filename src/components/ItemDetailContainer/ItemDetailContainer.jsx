import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/dbConnection";
import { Spinner } from "../spinner/spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import {collection, getDoc, doc} from "../../firebase/dbConnection"


const ItemDetailContainer = () => {
    const [products, setProduct] = useState ({});
    const [loading, setLoading] = useState (true);
    const {id} = useParams();
    
    useEffect (() => {
        setLoading(true);
        const productCollection = collection(db, "productos");
        const refDoc = doc(productCollection, id)



        getDoc (refDoc)
            .then((doc)=>{
                setProduct({id: doc.id, ...doc.data()})
                setLoading(false);
            })        
            .catch((error) =>{
                console.log (ERROR, error);
            }); 
    },[id]);    
   

   return (
    <main>
   
    <div >ItemDetailContainer</div>;
{loading
   ? <Spinner/> 
   : <ItemDetail {...products}/> }
  
</main> 
    )
}
export default ItemDetailContainer;