import { useEffect, useState } from "react";
import  {getCommodityById } from "../../Products";
import Itemdetail from "../Item";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [Commodity, setCommmodity] = useState(null)
   const {itemId} =useParams()

    useEffect(() => {
        getCommodityById(itemId)
            .then(response => {
                setCommmodity(response)
            })

            .catch(error => {
                console.error(error)
            })
    },
        [itemId])



return(
    <div className="ItemDetailContainer">
        <Itemdetail {...Commodity}/>
    </div>
)}
export default ItemDetailContainer