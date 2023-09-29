//STYLES:
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../layout/MainLayout.css'

const MainLayout = ({ children, title }) => {
  return (
    <div>
      <header>
      </header>
      <main className='mainContainer'>
        <h5 className='div'>{title}</h5>
        {children}
      </main>
      <footer className='footerContainer' >
        <p className="text-center">&copy; {2023} Trendy-Threads.Todos los derechos reservados.</p>
      </footer>
    </div>

  )
}

export default MainLayout;