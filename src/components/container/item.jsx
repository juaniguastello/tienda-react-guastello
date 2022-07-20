const Item = ({ item }) => {
  return (
    <li>
        <img src={item.img} alt={item.name} width="100px" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </li>
  );
};

export default Item;
