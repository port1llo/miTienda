
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import './App.css'
import Layout from "./components/pages/Layout.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404/Error404.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import Cart from "./components/Cart/Cart.jsx"

function App() {
   return (
    <CartContextProvider >
      <BrowserRouter>
        <Layout >
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>  
                <Route path="/vivero/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="*" element={<Error404/>}/>
                <Route path="/cart" element={<Cart/>}/>                            
            </Routes>  
        </Layout>  
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
