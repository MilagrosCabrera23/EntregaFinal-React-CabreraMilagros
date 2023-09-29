import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const useCollection = (collectionName) => {
    const [data, setData] = React.useState([])
    const [cargando, setCargando] = React.useState(true)

    React.useEffect(() => {
        const db = getFirestore();

        //Inicializamos la coleccion
        const collectionData = collection(db, collectionName);

        //Obtener los datos de la coleccion
        getDocs(collectionData)
            .then((snapshot) => {
            setData(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            })
            .catch(err => console.log(err))
            .finally(() => setCargando(false));
    }, []);

    return { data, cargando }
};