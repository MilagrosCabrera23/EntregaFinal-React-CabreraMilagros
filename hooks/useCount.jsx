import { useState } from "react"


export const useCount = (valueI = 0) => {

    const [count, setCount] = useState(valueI)  
    const incrementar = () => setCount(count + 1)
    const decrementar = () => setCount(count - 1)
    const reset = () => setCount(valueI)

    return {count,incrementar,decrementar,reset}
}