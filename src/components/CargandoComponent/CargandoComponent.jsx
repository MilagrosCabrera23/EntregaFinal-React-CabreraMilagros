
//LIBRERIA
import { DotSpinner } from '@uiball/loaders'
//STYLE
import "../CargandoComponent/CargandoComponent.css"

const CargandoComponent = () => {
    return (
        <div className='loaders'>
            <DotSpinner
                size={40}
                speed={0.9}
                color="black"
            />
        </div>
    )
}

export default CargandoComponent
