
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import { categories } from "./components/mock/mockData.js";
function App() {
  const title = "Lengua de Suegra";
  return (
    <>
       <Navbar categories ={categories} title="logo"/>
      <ItemListContainer title={title}/>
    </>
  );
}

export default App
