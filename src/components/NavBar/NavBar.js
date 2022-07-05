import './NavBar.css';

const NavBar = () => {

return <div>
<ul>
  <li><p style={{color: 'DodgerBlue'}}>MercadoTecno</p></li>
  <li><a className="active" href="#home">Home</a></li>
  <li><a href="#news">Products</a></li>
  <li><a href="#contact">Contact</a></li>
  
</ul>
</div>

}

export default NavBar;