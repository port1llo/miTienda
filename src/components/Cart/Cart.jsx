import { useState } from "react";
import { useCartContext } from "../../context/CartContext"
import { Button, Table } from "react-bootstrap";
import {db} from "../../firebase/dbConnection"
import { addDoc } from "firebase/firestore";
const Cart = () => {
    const{ cart, total, removeItem, clearCart} = useCartContext();
    const [formData, setFormData] = useState({name:"", tel:"", mail:""})
    const handleRemoveItem = (id, price, qty) => {
        removeItem (id, price, qty);
    };
    
    const handleClaerCart = () => {
        clearCart();
    };

    const handleOnChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
   // function handleNameChange(e){
   //     setFormData({...formData, name: e.target.value})
   // } 
   // function handleTelChange(e){
   //     setFormData({...formData, tel: e.target.value})
   // }
   // function handleMailChange(e){
   //     setFormData({...formData, mail: e.target.value})
   // }

    function handleSaveCart = ()=> {
        console.log("Saving in database")
        console.log("formData", formData)
        console.log("cart",cart)

        const ordersCollection =collection (db, "orders")
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
        }
        )
    }

    return (
        <>
        <Table className="table table-striped">
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
            </tbody>
        </Table>
<button onClick={handleClaerCart}>Clear Cart</button>

<input type="text" name="name" id="Nombre" onChange={(e)=>handleNameChange(e)} />
<input type="number" name="tel" id="Teleono" onChange={(e)=>handleTelChange(e)}/>
<input type="email" name="email" id="Ingrese email"onChange={(e)=>handleMailChange(e)}/>
<button onClick={handleSaveCart}>Finalizar Compra</button>  
        </>
    )
}

export default Cart