import { Link, Outlet,useNavigate,useParams } from "react-router-dom";

const Profile  = ()=>{

    const navegate = useNavigate() 
    console.log(navegate);

    const params = useParams()
    console.log(params);
    return(
        <div>
            <>
            <h1>Este es el Perfil Pertenece a Joel</h1>
            <h2>Cohorte: FT 42a</h2>

            <button>   {/* accede al link hijo */}
                <Link to={'person'}>Persona</Link>  {/* se anida con colocar "/" */}
            </button>
            <button>  {/* accede al link HOME */}
                <Link to={'/'}>Volver al Inicio</Link>
            </button>

            <button onClick={()=> navegate('/')}>Volver con UseNavegate </button>
            
            <Outlet/>
            </>

        </div>
    )
}

export default Profile