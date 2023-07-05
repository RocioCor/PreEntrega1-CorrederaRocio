import './Navbar.css';
const Navbar = ({ saludo},{Carts}) => {

    return (
        <>
            <nav>
                <div className="navbar">
                    <button className="navbar-toggle">R`imports</button>
                    <ul className={`navbar-menu`}>
                        <li className="item">home</li>
                        <li className="item">products</li>
                        <li className="item">about us</li>
                    </ul>
                    <div>{Carts}</div>
                </div>
            </nav>
        <div>{saludo}</div>
        </>);
}
export default Navbar;