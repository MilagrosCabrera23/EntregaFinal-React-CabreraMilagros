//COMPONENTES:
import Button from "react-bootstrap/Button";


const ErrorComponent = () => {
    return (
        <div className="error404">
            <span className="error404">4</span>
            <span className="error404">0</span>
            <span className="error404">4</span>


            <h2 className="h2Error text-black"> NO TE PREOCUPES...</h2>
            <p className="p-Error">¡Es solo un error 404!</p>
            <p className="p-Error">Es posible que lo que estas buscando se haya extraviado o el enlace se haya
                movido temporalmente. </p>
    

    <Button className="btn">Volver al Home</Button>
        </div >
    )
}

export default ErrorComponent;