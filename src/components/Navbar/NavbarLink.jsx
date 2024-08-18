import { NavLink } from "react-router-dom";

const Navbarlink = ({category}) => {
    return (
      <NavLink to={`/${category}`} className="navItem">{category}
      </NavLink>
    );
};  
export default Navbarlink;