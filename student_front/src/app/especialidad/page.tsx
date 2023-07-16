//importaciones
"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import PlusIcon from "../components/AddEspecialidad";
import EspecialidadTable from "../components/EspecialidadTable";


//DEfinir funcion que se ejecuta cuando hagan una peticion a esta ruta

export default function EspecialidadPage(){

    //Rescatar los datos de los estudiantes desde la API
    const [especialidades, setEspecialidades]=useState([])
    useEffect(
        ()=>{
            const fetchEspecialidades=async()=>{
                try{
                    const response=await fetch (`http://localhost:9090/especialidades`)
                    if(!response.ok){
                        throw new Error("No puede rescatar Especialidades ")
                    }

                    const data=await response.json()
                    const myEspecialidad = data._embedded.especialidades
                    setEspecialidades(myEspecialidad)
                    
                }catch(error){
                    console.error(error)
                }

            }

            fetchEspecialidades()
        }
    )
    
    //Llamar al componente EspecialidadTable

    return(
        <div className="container mx-auto">
            {/* <h1 className="p-6">Listado de Estudiantes</h1> */}
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Listado de </span> Especialidades.</h1>
            <EspecialidadTable especialidades={especialidades} />
            <p> . </p>
            <PlusIcon></PlusIcon>
        </div>
    )

}