import { useState } from "react";

const ItemCount = ({stock, initial }) => {

    const [qty, setQty] = useState(initial);
   
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
        return
        }
        setQty (qty + 1);
    };



    return (
        <div>
            <button onClick={() =>handleCLick ("-")}>-</button>
            <span>{qty}</span>
            <button onClick={() => handleCLick("+")}>+</button>
            <h1>Item Count</h1>
        </div>
    );
};
export default ItemCount;