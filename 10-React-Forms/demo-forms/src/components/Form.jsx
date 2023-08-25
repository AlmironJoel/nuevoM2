import { useState } from "react";

const Form =  () =>{
    //crea estados para el usuario
    const [form,setForm] = useState({
        email:"",
        password:""
    })//creamos diversos estados.
    
    const [error,setError] = useState({
            email:"",
            password:""
    })

    const handleOnChange = (event)=>{
        setForm({...form,
            [event.target.name]:event.target.value})
            
            validate()//comprueba validacion en tiempo real
        }
    //modifica a los propiedades

    //validador
    const validate = () =>{
        //email
        if(!/\S+@\S+\.\S+/.test(form.email)){
            setError({  
                ...error,
                email:"email invalido"
            })
        } else error.email = ""

        //password
        if(form.password.length<=6){
            setError({
                ...error,
                password:'Tiene que tener un minimo de 6 caracteres'
            })
        }else error.password = ""
    }

    const handleOnSubmit = (event)=>{
        event.preventDefault()
    }//evita que se recargue la pagina cuando le damos click al boton

    return(
        <>
         <form onSubmit={handleOnSubmit}> {/* envia la informacion sin recargar la pagina */}
             <h1>Formulario</h1>

             
             <label htmlFor="email">Email</label>
             <input name="email" type="email" placeholder="ingrese mail" value={form.email} onChange={handleOnChange} />
    
             {error.email&& <p>{error.email}</p> }  {/* muestra el mensaje de Error en pantalla */}
                <hr />
             <label htmlFor="password">Password</label>
             <input name="password" type="text" placeholder="ingrese Password"  value={form.password} onChange={handleOnChange} />
             {error.password&& <p>{error.password}</p> }  {/* muestra el mensaje de Error en pantalla */}
                <hr />
             <button disabled={!form.email||!form.password|| error.email||error.password} >Enviar</button>
             {/* Crea una condicion para el boton. si no cumple el boton se deshabilita */}
        </form>
        </>

    )
}

export default Form;