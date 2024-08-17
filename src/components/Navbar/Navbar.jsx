import Cartwidget from "../CartWidget/Cartwidget";
import "./Navbar.css";

const Navbar = ({categories, title}) => {
    return(
        <>
       
        <div><h1>{title}</h1></div>
        <div className="navItems"> 
        <a href="#" className="navItem">{categories[0]}</a>
        <a href="#"className="navItem">{categories[1]}</a>
        <a href="#"className="navItem">{categories[2]}</a>
        <a href="#"className="navItem">{categories[3]}</a>
        </div>
        <Cartwidget/>
        {/*<ul>
            <Navitem name= {categories[0]}/>
            <Navitem name= {categories[1]}/>
            <Navitem name= {categories[2]}/>
            <Navitem name= {categories[3]}/>
        </ul>*/}

        </>
    )
};


export default Navbar;