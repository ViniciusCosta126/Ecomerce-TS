import * as C from "./style";
import HeroImage from "../../assets/HeroImg.webp";
import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { Produto } from "../../types/Item";

const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    getProd();
  });

  const getProd = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProdutos(data);
  };

  return (
    <C.Container>
      <C.Hero>
        <img src={HeroImage} alt="" />
      </C.Hero>
      {produtos && (
        <div>
        <h1>Joalheria</h1>
        <C.ContainerProducts>
          {produtos.map((item,index) => {
            if(item.category === "jewelery"){
              return(
               <CardProduct item={item} key={index}/>
              )
            }
          })}
        </C.ContainerProducts>
        <h1>Eletronicos</h1>
        <C.ContainerProducts>
          {produtos.map((item,index) => {
            if(item.category === "electronics"){
              return(
               <CardProduct item={item} key={index}/>
              )
            }
          })}
        </C.ContainerProducts>
        </div>
        
      )}
    </C.Container>
  );
};

export default Home;
