import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import { Produto } from "../../types/Item";
import * as C from "./style";

const urlCategory = "https://fakestoreapi.com/products/category/";

const Categoria = () => {
  const { nome } = useParams();
  const [categoryProducts, setCategoryProducts] = useState<Produto[]>([]);

  const getCategoryProducts = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setCategoryProducts(data);
  };

  useEffect(() => {
    const urlPattern = `${urlCategory}${nome}`;
    getCategoryProducts(urlPattern);
  }, [nome]);

  if (categoryProducts) {
    return (
      <C.Container>
        <h2>{nome}</h2>
        <div className="categoryContainer">
        {categoryProducts.map((product,index) => {
          return <CardProduct item={product} key={index}/>
        })}
        </div>
      </C.Container>
    );
  }
  return <C.Container>Carregando....</C.Container>;
};

export default Categoria;
