import './style/Navbar.css';
import Carts from './Carts'; 
import { NavLink } from 'react-router-dom';
const Navbar = ({ saludo}) => {

    return (
            <nav className='NavBar'> 
                <link to="/">
                    <h3 >Ecommerce</h3>
                </link>
                <div className='Categorias'>
                    <NavLink to={`/category/celular`} className={({isActive}) => isActive ? "ActiveOption": "Option"}/>
                    <NavLink to={`/category/celularg40`} className={({isActive}) => isActive ? "ActiveOption": "Option"}/>
                    <NavLink to={`/category/celularg30`} className={({isActive}) => isActive ? "ActiveOption": "Option"}/>
                </div>
              <Carts/>
            </nav>
        
    );
}
export default Navbar;
/*NAVBAR*/