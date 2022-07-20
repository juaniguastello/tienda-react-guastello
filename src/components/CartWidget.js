import cart from '../cart.svg';

const styles = {
    cart: {
    //display: 'block',
    textalign: 'center',
    padding: '14px 16px',
    textDecoration: 'none', 

},
};
const CartWidget = () => {
return  (
    
        <ul className={styles.cart} style={{margin:'14px', float:'right'}}>
        <li ><img   src={cart} alt="cart" /></li>        
        </ul>    
    
);

};

export default CartWidget;