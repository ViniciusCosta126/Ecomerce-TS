import * as C from "./style";
import { Produto } from "../../types/Item";
import { Link } from "react-router-dom";
interface Props {
  item: Produto;
}

const CardProduct = ({ item }: Props) => {
  return (
    <C.Container>
      <div className="image-container">
        <img src={item.image} alt="" />
      </div>
      <C.ContentContainr>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div>
        <button><Link to={`/produto/${item.id}`}>Detalhes do produto</Link></button>
        <button>Adicionar ao carrinho</button>
        </div>
      </C.ContentContainr>
    </C.Container>
  );
};

export default CardProduct;
