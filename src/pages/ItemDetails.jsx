//IMPORTACIONES DE REACT:
import { useParams } from 'react-router-dom';
import { useItemCollection } from "../../hooks/useItemCollection/"
//Componentes:
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import CargandoComponent from "../components/CargandoComponent/CargandoComponent"

const ItemDetails = () => {
  
  const { itemId } = useParams();
  const { data, cargando } = useItemCollection("Products", itemId);

  return cargando ? <CargandoComponent /> : <ItemDetailContainer ProductosData={data} />;
}

export default ItemDetails;

