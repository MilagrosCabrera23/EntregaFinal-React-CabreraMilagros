//IMPORTACIONES DE REACT:
import { useContext, useState } from "react";
//COMPONENTES:
import { CartContext } from "../../context/CartContext";
//LIBRERIA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
//STYLE
import '../CartWidget/CartWidget.css'
//modal carrito
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from "../ItemCount/ItemCount";

const CartWidget = () => {

    const { cartsItems } = useContext(CartContext)
    const { cartProd, setCartProd } = useContext(CartContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="Cart" onClick={handleShow} >

            <FontAwesomeIcon icon={faCartShopping} />
            <h4 className="h4Text">{cartsItems}</h4>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cartProd.map((item) => (
                        <Card style={{ width: '18rem' }} key={item.id}>
                            <Card.Img variant="top" src={item.images} />
                            <Card.Body>
                                <Card.Title className="title-name">{item.title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><strong>Categoria: <p  className='text-muted'>{item.category}</p></strong></ListGroup.Item>
                                <ListGroup.Item><strong>Precio:<p  className='text-muted'> {item.price}</p></strong></ListGroup.Item>
                                <ListGroup.Item><strong>Stock:<p  className='text-muted'> {item.stock}</p></strong></ListGroup.Item>

                            </ListGroup>
                            <Card.Body>
                                <ItemCount />
                            </Card.Body>
                        </Card>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Terminar Compra
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>



    );
}


export default CartWidget; 