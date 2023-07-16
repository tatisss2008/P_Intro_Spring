//importaciones
"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import PlusIcon from "../components/AddDoctor";
import DoctorTable from "../components/DoctorTable";


//DEfinir funcion que se ejecuta cuando hagan una peticion a esta ruta

export default function DoctorPage(){

    //Rescatar los datos de los estudiantes desde la API
    const [doctores, setDoctores]=useState([])
    useEffect(
        ()=>{
            const fetchDoctores=async()=>{
                try{
                    const response=await fetch (`http://localhost:9090/doctores`)
                    if(!response.ok){
                        throw new Error("No puede rescatar Doctores.")
                    }

                    const data=await response.json()
                    const myDoctor = data._embedded.doctores
                    setDoctores(myDoctor)
                    
                }catch(error){
                    console.error(error)
                }

            }

            fetchDoctores()
        }
    )
    
    //Llamar al componente DoctorTable

    return(
        <div className="container mx-auto">            
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Listado de </span> Doctores.</h1>
            <DoctorTable doctores={doctores} />
            <p> . </p>
            <PlusIcon></PlusIcon>
        </div>
    )

}