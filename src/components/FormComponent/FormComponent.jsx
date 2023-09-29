//IMPORTACIONES DE REACT:
import React, { useState } from 'react'
//firebase:
import { addDoc, collection, getFirestore } from "firebase/firestore";
//COMPONENTES
import { Button } from "react-bootstrap";
//style:
import "../FormComponent/FormComponent.css"
//sweetAlert
import Swal from 'sweetalert2';

const FormComponent = () => {

    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [images, setImages] = useState("")
    const [title, setTitle] = useState("");

    const handEnvProduct = (e) => {
        const ProductNew = {
            brand,
            category,
            description,
            price,
            stock,
            images,
            title
        }

        const db = getFirestore();
        const agrProductColl = collection(db, "Products");

        addDoc(agrProductColl, ProductNew).then(({ id }) => console.log(id))
        Swal.fire({
            icon: 'success',
            title: 'Producto Creado',
            text: 'El producto se ha creado exitosamente.',
            confirmButtonText: 'OK'
        })
     
    }




return (
    <div>
        <h3 className='title-page'>CREAR LOS PRODUCTOS:</h3>
        <form>
            <input type="text" placeholder='Marca' onChange={(e) => setBrand(e.target.value)} />
            <input type="text" placeholder='Categoria' onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder='Descripcion' onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder='Precio' onChange={(e) => setPrice(e.target.value)} />
            <input type="number" placeholder='Stock' onChange={(e) => setStock(e.target.value)} />
            <input type="text" placeholder='Url/images' onChange={(e) => setImages(e.target.value)} />
            <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
        </form>
        <Button className='botonProd' onClick={handEnvProduct}>Crear Producto

        </Button>
    </div>
)

}
export default FormComponent