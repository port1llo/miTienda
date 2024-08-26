import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const ItemCount = ({stock, initial, handleOnBuy }) => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(initial);
    const [itemAdded, setItemAdded] = useState(false);
    
   
    const handleCLick = (op) => {
       
        op === "-"? clickMenos() : clickMas(); 
        };

    const clickMenos = () => {
      if (qty === 1) {
            alert("No se puede seleccionar menos de 1 producto");
            return;
        };
        setQty(qty -1);
    };

    const clickMas = () => {
        if (qty === stock) {
            alert("No hay mas stock");
        return;
        }
        setQty (qty + 1);
    };

const handleAddToCart = () => {
    handleOnBuy (qty)
    setItemAdded(true)
}

const handleGoTCheckout = () =>{
setItemAdded(false)
    navigate("/cart")

}
    return (
        <>
            
             {itemAdded ? (
                <Button variant="primary" onClick={handleGoTCheckout}>Checkout</Button>
             
            ) : (
                <>
                <div>
                    <button onClick={() =>handleCLick ("-")}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => handleCLick("+")}>+</button>
                </div>
                <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
             </>
             )}

          
        </>
        
    );
};
export default ItemCount;