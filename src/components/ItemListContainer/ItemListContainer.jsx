import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import styles from"./ItemListContainer.module.css";

const ItemListContainer =({title}) => {
    return (
        <>
        <div className= {styles.container} >
            <ItemList/> 
            <div >{title}</div>;
            <ItemCount/>
            </div>
        </> 
    );

};
export default ItemListContainer;
