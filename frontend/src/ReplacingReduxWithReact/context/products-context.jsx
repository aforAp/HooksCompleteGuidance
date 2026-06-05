import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

const ProductsContext11 = (props) => {
  let Datas = [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ];
  const [productsList, setProductsList] = useState(Datas);

  const toggleFavHandler = (id) => {
    setProductsList((prevState) => {
      const updatedProducts = prevState.map((prod) =>
        prod.id === id ? { ...prod, isFavorite: !prod.isFavorite } : prod,
      );
      console.log("updatedProducts");
      console.log(updatedProducts);
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider
      value={{ product: productsList, toggleFav: toggleFavHandler }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext11;
