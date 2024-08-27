import Item from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = ({products}) => {



    return (
    <>
        <div className= {`${styles.container} d-flex gap`}>
            {products.map((product) => {
            return <Item key={product.id} product={product} />;
            })}
        </div>   
    </> 
);
};
export default ItemList;