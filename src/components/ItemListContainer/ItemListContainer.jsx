//IMPORTACIONES DE REACT:
import { Navigate, useNavigate } from "react-router-dom";
//componentes:
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//STYLE:
import "./ItemListContainer.css";


const ItemListContainer = ({ greeting, ProductosData }) => {
  console.log(ProductosData)

  const navegar = useNavigate()

  return (
    <div>
      <h5 className="greeting">{greeting}</h5><br />
      <h3 className="title-produ">Nuestros Productos:</h3>

      <div className="Prod">
        {ProductosData.map((items) => {
          return (
            <Card style={{ width: "18rem", minHeight: "20rem" }} className="cartas" key={items.id}>
              <Card.Img src={items.images} className="card-img" />
              <Card.Body>
                <Card.Title className="title-name">{items.title}</Card.Title>
                <Card.Text>
                  <strong>Marca:  <p className="text-muted">{items.brand}</p></strong>
                  <strong>Precio:$ {items.price}</strong>
                </Card.Text>
                <Button variant="info" className="text-white bold" onClick={() => { navegar(`/item/${items.id}`) }}>Mas detalles </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;
