//IMPORTACIONES DE REACT:
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useCollection } from "../../hooks/useCollection"
//Componentes:
import CargandoComponent from "../components/CargandoComponent/CargandoComponent"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"


const Category = () => {

    const [prodsFiltrados, setprodsFiltrados] = useState([])

    const { data, cargando } = useCollection("Products")
    const { categoryId } = useParams()


    useEffect(() => {
        const prodsFiltrados = data.filter((products) => {
            return (
                products.category === categoryId
            )
        });
        setprodsFiltrados(prodsFiltrados)
    }, [data, categoryId])


    return cargando ? (<CargandoComponent />) :
        (<ItemListContainer  ProductosData={prodsFiltrados}></ItemListContainer>)


}
export default Category