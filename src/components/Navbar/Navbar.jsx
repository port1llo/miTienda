import Cartwidget from "../CartWidget/Cartwidget";
import "./Navbar.css";
import Navbarlink from "./NavbarLink";
import logo from "../../assets/logo.png"
import { categories } from "../mock/mockData";
import { Link } from "react-router-dom";

const Navbar = ({ title}) => {

  
    return(
        <>
            <div>
                <h1>{title}</h1>
                <Link to="/"> 
                    <img src={logo} alt="" className="logo" />
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