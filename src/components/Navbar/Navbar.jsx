import Cartwidget from "../CartWidget/Cartwidget";
import "./Navbar.css";
import Navbarlink from "./NavbarLink";
import logo from "../../assets/logo.png"
import { categories } from "../mock/mockData";
import { Link } from "react-router-dom";

const Navbar = () => {
   
  
    return(
       <>
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <Link to="/"> 
                    <img src={logo} alt="" className= "logo"  width="50" height="50" className="d-inline-block align-text-top"  />
                    Lengua de Suegra
                </Link>
            </div>
        </nav>
           
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