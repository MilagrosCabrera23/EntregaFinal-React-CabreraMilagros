//IMPORTACIONES DE REACT:
import { CartProvider } from './context/CartContext';
//Componentes:
import MainLayout from "../src/layout/MainLayout"
import MainRouter from "./routes/MainRouter"

const App = () => {
  return (
    <CartProvider>
      <MainLayout title="Envios gratis superando los 20.000 por compra.">
        <MainRouter />
      </MainLayout>
    </CartProvider>
  )
}
export default App
