import { useEffect, useState } from "react";
import products from "../../mock/products";
import ItemList from "./itemList";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });
    traerProductos
      .then((productos) => {
        setItems(productos);
        console.log(productos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="itemListContainer">
      <h2>{greeting} </h2>
      <div>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
