import * as C from "./style";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <C.Container>
    <C.ContainerCentralizar>
      <C.Logo><Link to="/">Ecomerce</Link></C.Logo>
      <C.NavLinks>
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <C.Menu className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checkout">Carrinho</Link>
          </li>
          <li className="services">
            <Link to="">Categorias</Link>
            <ul className="dropdown">
              <li>
                <Link to="/categoria/electronics">Eletronicos</Link>
              </li>
              <li>
                <Link to="/categoria/jewelery">Joias</Link>
              </li>
              <li>
                <Link to="/categoria/men's clothing">Roupas Masculinas</Link>
              </li>
              <li>
                <Link to="/categoria/women's clothing">Roupas Femininas</Link>
              </li>
            </ul>
          </li>
        </C.Menu>
      </C.NavLinks>
      </C.ContainerCentralizar>
    </C.Container>
  );
};

export default NavBar;
