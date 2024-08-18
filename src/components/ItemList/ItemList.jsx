import Item from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = ({products}) => {



    return (
    <>
    <div className= {styles.container}>
    <div  >
        ItemList
    </div>
    {products.map((product) => {
        return <Item key={product.id} product={product}/>;
    })}
     
     </div>   
     </> 
)};
export default ItemList;