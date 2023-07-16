
//importaciones


//interfaz del estudiante
interface Student{
    name:string,
    email:string,
    dateOfBirth: string
}

//Interfaz para el conjunto de estudiantes
interface StudentTableProps{
    students: Student[]
}

//Definir el componente de FC, crear un listado en la funcion map

const StudentTable:React.FC<StudentTableProps>= ({students})=>{

    console.log(students)
    return(
        <table className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <thead>
                <tr>
                    <th scope="col" className="p-4">Nombre</th>
                    <th scope="col" className="p-4">Correo Electronico</th>
                    <th scope="col" className="p-4">Fecha de Nacimiento</th>
                </tr>

            </thead>
            <tbody>
                {
                    students.map(
                        (student,index)=>{
                            return(
                                <tr >
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.dateOfBirth}</td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
}

export default StudentTable