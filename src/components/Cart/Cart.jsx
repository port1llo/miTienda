import { useState } from "react";
import { useCartContext } from "../../context/CartContext"
import { Button, Table } from "react-bootstrap";
import {db} from "../../firebase/dbConnection"
import { addDoc, collection } from "firebase/firestore";
import styles from "./cart.module.css";

const Cart = () => {
    const{ cart, total, removeItem, clearCart} = useCartContext();
    const [formData, setFormData] = useState({name:"", tel:"", mail:""})
    const handleRemoveItem = (id, price, qty) => {
        removeItem (id, price, qty);
    };
    
    const handleClearCart = () => {
        clearCart();
    };

    const handleOnChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
      const handleSaveCart = ( ) => {
        console.log("Saving in database")
        console.log("formData", formData)
        console.log("cart", cart)

        const ordersCollection = collection (db, "orders")
        const newOrder = {
            buyer: formData,
            items: cart,
            date: new Date(),
            total: total
        }

        addDoc(ordersCollection, newOrder)
        .then((doc)=>{
            alert("Order saved with id: " + doc.id)
            console.log("Order saved with id: " + doc.id)
            clearCart();
            setFormData ({name:"", tel:"", email:""})
        })
        .catch((error) =>{
            console.error("error adding document: ", error)
        })
    }

    return (
        <>
       
        <Table className= {`${styles.tablelp} table-striped`}>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {cart?.map(({id, name, price, qty}, index) => {
                    return (
                        <tr key={index}>
                                <th scope="row">{id}</th>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{qty}</td>
                                <td>
                                    <Button onClick={() => handleRemoveItem (id, price, qty)}>
                                        Remove Item
                                    </Button>
                                </td>
                        </tr>
                    );
                })}
                    
                <tr>
                    <th colSpan={4}>Total Price</th>
                    <td>$ {total}</td>
                </tr>
                <Button onClick={handleClearCart}>Clear Cart</Button>
            </tbody>
           
        </Table>

<div className= {styles.container} >
        <div>
            <div className="card-header">
            <label for="formGroupExampleInput" className="form-label">Ingrese su nombre </label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" ej: Sapo Pepe" onChange={(e)=>handleOnChange(e)}/>
            </div>
            <div className="card-header">
            <label for= "formGroupExampleInput2" className="form-label">Ingrese su numero de telefono</label>
            <input type="num" className="form-control" id="formGroupExampleInput2" placeholder=" ej: 03034546"onChange={(e)=>handleOnChange(e)}/>
            </div>
            <div className="card-header">
            <label for="formGroupExampleInput2" className="form-label">Ingrese su email</label>
            <input type="email" className="form-control" id="formGroupExampleInput2" placeholder=" ej: Verdequetequiero@LenguaDeSuegra.com"onChange={(e)=>handleOnChange (e)}/>
            </div>
       
            <Button  onClick={handleSaveCart} >Finalizar Compra</Button> 
         </div>
          
</div>
        </>
    )
}

export default Cart