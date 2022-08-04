

export type Produto = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export type CartContextType = {
  produtos: Produto[];
  addProduct:(produto:Produto) => void;
  removeProduct:(id:number) =>void
}
  