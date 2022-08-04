import { Produto, CartContextType } from "../../types/Item";
import { CartContext } from "../../providers/auth";
import { useContext, useEffect, useState } from "react";
import * as C from "./style";
import CarItem from "../../components/CartItens";

const Carrinho = () => {
  const { cart } = useContext(CartContext) as CartContextType;

  const [total, setValor] = useState(0);
  useEffect(() => {
    soma();
  }, [cart]);
  const soma = () => {
    var valor_novo = 0;
    cart.forEach((element: Produto) => {
      valor_novo += element.price;
    });
    setValor(valor_novo);
  };
  return (
    <C.Container>
      <h2>Checkout de compras</h2>
      {cart.map((item: Produto, index: number) => {
        return <CarItem item={item} key={index} />;
      })}
      <p>Valor total: R${total.toFixed(2)}</p>
    </C.Container>
  );
};

export default Carrinho;
