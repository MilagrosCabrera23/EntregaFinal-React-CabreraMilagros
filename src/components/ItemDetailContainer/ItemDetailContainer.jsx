//IMPORTACIONES DE REACT:
import { useState, useContext } from 'react';
//COMPONENTES
import ItemCount from '../ItemCount/ItemCount';
//COMPONENTES  DE  BS:
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
//STYLE
import "../ItemDetailContainer/ItemDetailContainer.css"
//sweetAlert
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = ({ ProductosData }) => {

    const [stock, setStock] = useState(10)
    const [add, setAdd] = useState(false)

    const { cartProd, setCartProd } = useContext(CartContext)

    //Carrito:
    const agregarProd = () => {
        setCartProd([...cartProd, ProductosData])
        console.log(cartProd)
    }

    //Condicional del carrito:
    const button1 = {
        backgroundColor: "#FF0000",
        color: "white"
    }

    const button2 = {
        backgroundColor: "#0174DF",
        color: "white"
    }

    return (
        <div>
            <h4 className='title-detalles'>Detalles del producto:</h4>

            <Card style={{ width: '18rem', margin: '1em' }}>
                <Card.Img variant="top" src={ProductosData.images} />
                <Card.Body>
                    <Card.Title className="title-name">{ProductosData.title}</Card.Title>
                    <Card.Text>
                        <strong>Categoría:<p className='text-muted'>{ProductosData.category}</p></strong>
                        <strong>Marca:  <p className='text-muted'>{ProductosData.brand}</p></strong>
                        <strong>Stock: <p className='text-muted'> {ProductosData.stock}</p></strong>
                        <strong>Precio: <p className='text-muted'>{ProductosData.price}</p></strong>
                    </Card.Text>

                    <ItemCount />

                    {stock >= 6 ?
                        <strong>Stock disponible</strong> : <h5>Ultimas disponibles!</h5>}

                    <Button style={add ? button1 : button2} onClick={() => {
                        setStock(stock - 1)
                        setAdd(true)
                        agregarProd(ProductosData)



                        Swal.fire({
                            title: '¡Producto agregado al carrito!',
                            text: 'Tu artículo se ha agregado al carrito de compras.',
                            icon: 'success',
                            confirmButtonText: 'Seguir comprando',
                            showCancelButton: true,
                            cancelButtonText: 'Ir al carrito',
                        })
                    }}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div >
    )

}

export default ItemDetailContainer;
