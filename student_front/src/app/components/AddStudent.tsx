

//importaciones

import { useState } from "react"

//crear la funcion

const PlusIcon= ()=>{

    const [abierto, setAbierto]= useState(false)
    const [datosFormulario, setDatosFormulario]=useState(
        {            
                "name":"",
                "email":"",
                "dateOfBirth":""            
        }
    )

    //Manejadores de eventos
    const clickIcon=()=>{
        setAbierto(!abierto)
    }
    
    const cambiarValor=(e:any)=>{
        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]:e.target.value
        })
    }

    const procesarFormulario= async (e:any)=>{
    e.preventDefault()
      
        //Manejar el formulario
        try{
            const response = await fetch ('http://localhost:9090/students',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(datosFormulario)

            }
            )

            if(!response.ok){
                throw new Error("No se pudo guardar")
            }

            setAbierto(false)

        }catch(error){
            console.log(error)
        }
    }

    //estructura JSX del componente
    return (
        <div>
            <div onClick={clickIcon}>
                {/* <span> ADD </span> */}
                <span><a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Add </a></span>
                <p>.</p>
            </div>
            {abierto &&(
                <form onSubmit={procesarFormulario}>
                {/* <form> */}
                    <input
                        type="text"
                        name= "name"
                        placeholder="Nombre"
                        onChange={cambiarValor}
                    />
                    <input
                        type="email"
                        name= "email"
                        placeholder="Correo Electrónico"
                        onChange={cambiarValor}
                    />
                    <input
                        type="date"
                        name= "dateOfBirth"
                        placeholder="Fecha de Nacimiento"
                        onChange={cambiarValor}
                    />
                    {/* <button type="submit"> Guardar </button> */}
                    <button type="submit" className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-900"> Guardar </button>
                </form>
            )
            }
        </div>
    )

}

export default PlusIcon

