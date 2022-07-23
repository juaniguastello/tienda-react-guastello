import Item from './item';
import './itemList.css';


const ItemList = ({ items }) => {
    console.log(items);
  return (
    
    <div className="itemList">
      {items.map((item) => (
        <Item item = {item} key={item.id}/>
      ))}
    </div>
    
  );
}

export default ItemList; 