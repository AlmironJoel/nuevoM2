import {Link, link,navLink} from  'react-router-dom'
//tenemos que señalizar metodo Link y navlink. La diferencia es que Link si usar estilos, el otro no

const Home = ()=>{
    return(
        <>
        <h1>Esta es la ruta HOME</h1>
        <button>
            <Link to={'/about'}>Boton de About</Link> {/* señalamos la direccion del Boton */}
        </button>
        <button>
            <Link to={'/profile'}>Boton de profile</Link> {/* señalamos la direccion del Boton */}
        </button>
        </>
    )
}
export default Home