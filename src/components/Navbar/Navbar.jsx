import Cartwidget from "../CartWidget/Cartwidget";
import "./Navbar.css";
import Navbarlink from "./NavbarLink";
import logo from "../../assets/logo.png"
import { categories } from "../mock/mockData";

const Navbar = ({ title}) => {

  
    return(
        <>
        <div>
        <img src={logo} alt="" className="logo" />
        <h1>{title}</h1>
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