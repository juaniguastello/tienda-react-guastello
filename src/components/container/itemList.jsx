import Item from './item';
import './itemList.css';


const ItemList = ({ items }) => {
    console.log(items);
  return (
    <div className="itemList">
    <ul>
      {items.map((item) => (
        <Item item = {item} key={item.id}/>
      ))}
    </ul>
    </div>
  );
}

export default ItemList; 