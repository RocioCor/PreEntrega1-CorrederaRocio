import Item from "./Item"
const ListaItems = ({products}) => {
    console.log(products)
    const map = Array.isArray(products)
    
    return (
    <div className='Lista'>
    
    {map ? products.map(prod => <Item key={prod.id } {...prod}/>) : <Item {...products} />}
    
    </div>
    )
    }
    
    export default ListaItems