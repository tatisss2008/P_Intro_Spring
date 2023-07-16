//importaciones
"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import PlusIcon from "../components/AddPaciente";
import PacienteTable from "../components/PacienteTable";


//DEfinir funcion que se ejecuta cuando hagan una peticion a esta ruta

export default function PacientePage(){

    //Rescatar los datos de los estudiantes desde la API
    const [pacientes, setPacientes]=useState([])
    useEffect(
        ()=>{
            const fetchPacientes=async()=>{
                try{
                    const response=await fetch (`http://localhost:9090/pacientes`)
                    if(!response.ok){
                        throw new Error("No puede rescatar Pacientes ")
                    }

                    const data=await response.json()
                    const myPaciente = data._embedded.pacientes
                    setPacientes(myPaciente)
                    
                }catch(error){
                    console.error(error)
                }

            }

            fetchPacientes()
        }
    )
    
    //Llamar al componente PacienteTable

    return(
        <div className="container mx-auto">            
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Listado de </span> Pacientes.</h1>
            <PacienteTable pacientes={pacientes} />
            <p> . </p>
            <PlusIcon></PlusIcon>
        </div>
    )

}