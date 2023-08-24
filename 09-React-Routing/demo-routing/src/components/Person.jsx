import { Link,NavLink } from "react-router-dom";

const Person = ()=>{
    return(
        <>
            <h2>Este es el Perfil de la PERSONA</h2>
            <p>Alumno : 124</p>
            <p>cohorte : 42a</p>

            <button>{/* podemos poner para volver al perfil como si quiesieramos cerrar esa anidacion */}
                <Link to={'/profile'} >Cerrar anidacion de Profile</Link>
            </button>
        </>
    )
}
export default Person