//importaciones
"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import StudentTable from "../components/StudentTable";


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
        <div>
            <h1>Listado de Estudiantes</h1>
            <StudentTable students={students} />
        </div>
    )

}