import Navbar from "./Navbar";
const Container = () => {
    const saludo= <p>Bienvenido a ecommerce</p> 

    return (<>
        <Navbar/>
        {saludo}
    </>);
}
export default Container;