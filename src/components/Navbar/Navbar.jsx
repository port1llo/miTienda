import Cartwidget from "../CartWidget/Cartwidget";
import "./Navbar.css";
import Navbarlink from "./NavbarLink";

const Navbar = ({categories, title}) => {

  
    return(
        <>
        <div><h1>{title}</h1>
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