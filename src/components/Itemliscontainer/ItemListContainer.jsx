import { useEffect, useState } from "react";
import { getCommodity, getCommodityByCategory } from "../../Products";
import { useParams } from "react-router-dom";
const ItemlistContainer = ({ greeting }) => {
    const [Commodity, setCommodity] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getCommodityByCategory : getCommodity
        asyncFunc(categoryId)
            .then(response => {
                setCommodity(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


    return (
        <div>
            <h1>{greeting}</h1>
            <listProduct Commodity={Commodity} />
        </div>
    )
}
export default ItemlistContainer
/*MAIN DE PAGINA */