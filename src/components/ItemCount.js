import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);
  const restar = () => count > initial ? setCount(count - 1): null;
  const sumar = () => count < stock ? setCount(count + 1) : null ;
  return (
    <div>
        <div>
          <button onClick={restar}>-</button>
          <p>{count}</p>
          <button onClick={sumar}>+</button>
        </div>
        <div>
          <button>Agegar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount; 