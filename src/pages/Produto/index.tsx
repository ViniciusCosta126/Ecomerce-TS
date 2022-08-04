import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import { Produto } from "../../types/Item";

import * as C from "./style";

const urlProduct = "https://fakestoreapi.com/products/";

const SingleProduct = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState<Produto>();
  const [relatedProducts, setRelatedProducts] = useState<Produto[]>([]);

  const getProduct = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setProduto(data);
  };

  const getRelatedProducts = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${produto?.category}`
    );
    const data = await res.json();
    console.log(data)
    setRelatedProducts(data);
  };

  useEffect(() => {
    getProduct(`${urlProduct}${id}`);
  }, [id]);

  useEffect(() => {
    getRelatedProducts();
  });

  if (produto) {
    return (
      <C.Container>
        <C.SingleProductContainer>
          <img src={produto.image} alt="" />
          <div className="content-product">
            <h2>{produto.title}</h2>
            <p className="description">{produto.description}</p>
            <p className="price">R$ {produto.price.toFixed(2)}</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </C.SingleProductContainer>
        <C.RelatedProductsContainer>
          <>
          <h2>Produtos Relacionados</h2>
          <div>
          {relatedProducts.map((relatedProduct,index) =>{
            if(relatedProduct.id === produto.id){
              return
            }
            return <CardProduct item={relatedProduct} key={index}/>
          })}
          </div>
          </>
        </C.RelatedProductsContainer>
      </C.Container>
    );
  }
  return <C.Container>Carregando...</C.Container>;
};

export default SingleProduct;
