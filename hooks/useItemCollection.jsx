import React, { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export const useItemCollection = (collectionName, itemId) => {
    const [data, setData] = React.useState([]);
    const [cargando, setCargando] = React.useState(true);
    const [error, setError] = React.useState(false)

    useEffect(() => {
        const db = getFirestore();

        const items = doc(db, collectionName, itemId);

        getDoc(items)
            .then((snapshot) => {
                setData({ id: snapshot.id, ...snapshot.data() })
            })
            .catch(err => { setError(true) })
            .finally(() => { setCargando(false) });
    }, [itemId]);

    return { data, cargando, error };
};