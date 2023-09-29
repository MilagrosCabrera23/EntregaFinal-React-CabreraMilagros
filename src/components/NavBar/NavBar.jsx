//IMPORTACIONES DE REACT:
import { Link } from 'react-router-dom';
//COMPONENTES:
import { useCollection } from "../../../hooks/useCollection"
//Componentes DE BS:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
//STYLE:
import '../NavBar/NavBar.css'


const NavBarComponent = () => {

    const { data, cargando } = useCollection("Categorias")
    console.log(data)


    return (
        <Navbar expand="lg" className="NavbarContainer">
        <Container>
            <Navbar.Brand>
                <Link to={"/"}>Trendy-Threads</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mt-1 navbar">
                    <Nav.Link>
                        <Link to={"/"}>Home</Link>
                    </Nav.Link>
                    {
                        cargando ? null : (
                            data[0].categorias.map((category, index) => (
                                <Nav.Link key={index}>
                                    <Link to={`/category/${category}`}>{category}</Link>
                                </Nav.Link>
                            ))
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
        <CartWidget />
    </Navbar>
    );
}

export default NavBarComponent;