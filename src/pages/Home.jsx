//IMPORTACIONES DE REACT:
import { useCollection } from "../../hooks/useCollection"
//Componentes:
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import CargandoComponent from "../components/CargandoComponent/CargandoComponent"


const Home = () => {

   const { data, cargando } = useCollection("Products")

   
   return cargando ? <CargandoComponent /> :
      < ItemListContainer greeting={"¡Bienvenidos a Mi Tienda de Ropa! Explora nuestra exclusiva colección de moda para hombres, mujeres y niños. Descubre las últimas tendencias, estilos únicos y precios increíbles."}
         ProductosData={ data} ></ItemListContainer >
}
export default Home
