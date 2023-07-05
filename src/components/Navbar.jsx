import './Navbar.css';
const Navbar = ({ saludo}) => {

    return (
        <>
            <nav>
                <div className="navbar">
                    <button className="navbar-toggle">R`imports</button>
                    <ul className={`navbar-menu`}>
                        <li className="item">home</li>
                        <li className="item">products</li>
                        <li className="item">about us</li>
                <li className="item"> <button className='carrito' >carrito 20</button></li>
                    </ul>
                </div>
            </nav>
        <div>{saludo}</div>
        </>);
}
export default Navbar;