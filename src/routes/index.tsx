import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Carrinho from "../pages/Carrinho";
import Categoria from "../pages/Categorias";
import Home from "../pages/Home";
import Produto from "../pages/Produto";

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Outlet />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/checkout" element={<Carrinho/>} />
          <Route path="/produto/:id" element={<Produto/>} />
          <Route path="/categoria/:nome" element={<Categoria/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rotas