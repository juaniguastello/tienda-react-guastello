import './item.css';

const Item = ({ item }) => {
  return (
    <div className='item'>
        <img src={item.img} alt={item.name} width="100px" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default Item;
