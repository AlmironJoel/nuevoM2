
// //Boton para agregar amigos
// const respuesta = (response)  => {
//     const [usersList] = $('#lista').empty();//Empty es para que solo se repita una vez  la lista

const { response } = require("express");

//     response.forEach(user => {
//         const newLi = document.createElement("li");
//         newLi.innerText = user.name + " id:"  + user.id;
//         usersList.appendChild(newLi)
//     });
// }

  
// const [loadUsers] = $("#boton")

// const fetchUsers = () => {
//     $.get("http://localhost:5000/amigos",respuesta)
// }

// boton.addEventListener("click",fetchUsers)

// //Buscar amigos
// //*Un campo de busqueda (input) que reciba el id de un amigo y un boton "buscar". Al hacer click en el boton, buscaremos el amigo que tiene ese id en el servidor, y lo mostraremos en el DOM. Para conseguir los datos de un amigo en particular del servidor, puedes hacer un GET nuestro servidor concatenando el id del amigo que queremos encontrar, Por ej: http://localhost:5000/amigos/1 le pediria al servidor el amigo con id = 1
// //se crea el evento
// $("#search").click (()=>{
//     const entrada = $("#input").val();// Val Establece el nuevo valor.
 
//     //?.ajax() se utiliza para enviar y recibir datos de forma asincrónica entre el navegador y el servidor. 
// //para cargar contenido, interactuar con servicios web, manejar formularios o implementar otras funcionalidades de interacción dinámica entre el cliente y el servidor.
//     $.ajax({
//         type:"GET",
//         url:`http://localhost:5000/amigos/${entrada}`,
//         success: data => {$("#amigo").text(data.name);}
//     })

// })

// //Eliminar amigos
// //creamos el evento
// $("#delete").click (()=>{
//     const borrar = $("#inputDelete").val()
//     if(borrar !== ""){
//         $.ajax({
//             type: "DELETE",
//             url: `http://localhost:5000/amigos/${borrar}`,
//             success: data => {
//                 $("#success").text(`Tu amigo se fue pal lobby`);
                
//             },
//             error: () => { $("#success").text(`tu amigo no se quiere ir`);}
//         })
//     }    
// })

//!-------------------------------------

$("#boton").on("click", (e)=>{
    let lista = $("#lista");

    $.get("http://localhost:5000/amigos/amigos",(response) =>{
        response.map((amigo)=>{
            let elementoHTML = document.createElement("li");
            elementoHTML.innerHTML=`${amigo.name} es tu amigo numero: ${amigo.id}`
            lista.append(elementoHTML)
        });
    });
});

$("#search").on("click",() =>{
    let id = $("#input").value;
if(id) {
    $.get(`http://localhost:5000/amigos/amigos/${id}`),(response)=> {
        $("#amigo").html(`nombre: ${response.name}`);
    }  
} else {
    $("#amigo").html(`Inserta un id`);
};
    
});

$("#delete").on("click",()=> {
    let id = document.querySelector("#inputDelete").value

    if(id){
        $.ajax({
            type: "DELETE",
            url:"http://localhost:5000/amigos/amigos/${id}",
            success:()=>{
                $("#success").html("Tu amigo fue eliminado");
                id = "  "
            },
        })
    } else {
        $("#success").html("Inserta un ID")
    }
})