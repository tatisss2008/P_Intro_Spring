//importaciones
"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import StudentTable from "../components/StudentTable";
import PlusIcon from "../components/AddStudent";


//DEfinir funcion que se ejecuta cuando hagan una peticion a esta ruta

export default function StudentPage(){

    //Rescatar los datos de los estudiantes desde la API
    const [students, setStudents]=useState([])
    useEffect(
        ()=>{
            const fetchStudents=async()=>{
                try{
                    const response=await fetch (`http://localhost:9090/students`)
                    if(!response.ok){
                        throw new Error("No puede rescatar estudiantes ")
                    }

                    const data=await response.json()
                    const myStudents = data._embedded.students
                    setStudents(myStudents)
                    
                }catch(error){
                    console.error(error)
                }

            }

            fetchStudents()
        }
    )
    
    //Llamar al componente StudentTable

    return(
        <div className="container mx-auto">
            {/* <h1 className="p-6">Listado de Estudiantes</h1> */}
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Listado de </span> Estudiantes.</h1>
            <StudentTable students={students} />
            <p> . </p>
            <PlusIcon></PlusIcon>
        </div>
    )

}