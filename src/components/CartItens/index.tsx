import * as C from "./style";

import { Produto, CartContextType } from "../../types/Item";
import { CartContext } from "../../providers/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface Props {
  item: Produto;
  key: number;
}
const CarItem = ({ item }: Props) => {
  const { removeProduct } = useContext(CartContext) as CartContextType;

  const handleClick = () => {
    removeProduct(item.id);
  };
  return (
    <C.Container>
      <p className="name">
        <Link to={`/produto/${item.id}`}>Nome: {item.title}</Link>
      </p>
      <p className="price">Valor: R${item.price.toFixed(2)}</p>
      <button onClick={handleClick}>❌</button>
    </C.Container>
  );
};

export default CarItem;
