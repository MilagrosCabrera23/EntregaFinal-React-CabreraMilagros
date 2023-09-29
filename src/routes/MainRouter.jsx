//IMPORTACIONES DE REACT:
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages:
import Home from '../pages/Home/'
import NavBar from '../components/NavBar/NavBar'
import Category from '../pages/Category'
import ItemDetails from '../pages/ItemDetails'
import CrearProduct from '../pages/CrearProduct'
import Error404 from '../pages/Error404'


const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoryId' element={<Category/>} />
        <Route path="/item/:itemId" element={<ItemDetails />} />
        <Route path="/crear/product" element={<CrearProduct />} />
        <Route path="/error/404" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
