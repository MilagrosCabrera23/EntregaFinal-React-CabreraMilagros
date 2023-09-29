//IMPORTACIONES DE REACT:
import React from 'react'
//Componentes:
import FormComponent from '../components/FormComponent/FormComponent'
//Firebase:
import { doc, getFirestore, updateDoc } from "firebase/firestore"
//SweetAlert2
// import Swal from 'sweetalert2'


const CrearProduct = () => {
  React.useEffect(() => {
    const db = getFirestore();

    const docActualizar = doc(db, "Products", "Og8azLlW874a32Uh7rtn")
    updateDoc(docActualizar, { stock: 100 })

    
  }, [])

  return (
    <FormComponent />
  )
}

export default CrearProduct;
