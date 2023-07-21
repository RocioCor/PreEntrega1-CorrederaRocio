const Commodity = [{
    id: "1",
    name: "Motorola Edge 40 pro",
    price: " 300.000 Ars",
    category: "Phones",
    img: "https://armoto.vtexassets.com/arquivos/ids/164342-800-auto?v=638194223255170000&width=800&height=auto&aspect=true",
    stock: "10",
    descripción: "celular alta-gama, precio-calidad, version andorid 13"
},
{
    id: "2",
    name: "Motorola Edge30 ultra",
    price: " 200.000 Ars",
    category: "Phones",
    img: "https://armoto.vtexassets.com/arquivos/ids/162899-800-auto?v=638101344667300000&width=800&height=auto&aspect=true",
    stock: "10",
    descripción: "celular alta-gama, precio-calidad, version android 12"
},
{
    id: "3",
    name: "Motorola G72 pro",
    price: " 130.000 Ars",
    category: "Phones",
    img: "https://armoto.vtexassets.com/arquivos/ids/163866-800-auto?v=638082337057430000&width=800&height=auto&aspect=true",
    stock: "10",
    descripción: "celular gama-media, precio-calidad, version android 12"
}]
export const getCommodity = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Commodity)
        }, 500)
    })
}
export const getCommodityById=(CommodityId)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(Commodity.find(Commod=> Commod.id === CommodityId))
        }, 500)
    })
}
export const getCommodityByCategory=(CommodityCategory)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(Commodity.find(Commod=> Commod.category === CommodityCategory))
        }, 500)
    })
}
export default getCommodityByCategory;
/*MERCADERÍA*/