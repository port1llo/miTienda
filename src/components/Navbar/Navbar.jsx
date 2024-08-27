import Cartwidget from "../CartWidget/Cartwidget";
import "./Navbar.css";
import Navbarlink from "./NavbarLink";
import logo from "../../assets/logo.png"
import { categories } from "../mock/mockData";
import { Link } from "react-router-dom";

const Navbar = () => {
   
  
    return(
        <>
            <div className="titulonav">
                <Link to="/"> 
                    <img src={logo} alt="" className= "logo"    />
                    <h1 className="=titulonav-1">Lengua de Suegra</h1>
                </Link>
                
            </div>
            <div className="navItems"> 
                {categories.map((element, id) => {
                    return  <Navbarlink key={id} category={element}/>;
                })};
            </div>
            <Cartwidget/>
        </>
    )
};


export default Navbar;