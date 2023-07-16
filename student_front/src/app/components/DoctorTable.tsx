
//importaciones


//interfaz del estudiante
interface Doctor{
    idDoc:string,
    name:string,
    lastName:string,
    email:string,
    mobile:string,
    consultorio: string
}

//Interfaz para el conjunto de estudiantes
interface DoctorTableProps{
    doctores: Doctor[]
}

//Definir el componente de FC, crear un listado en la funcion map

const DoctorTable:React.FC<DoctorTableProps>= ({doctores})=>{

    console.log(doctores)
    return(
        <table className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <thead>
                <tr>
                    <th scope="col" className="p-4">Identificacion</th>
                    <th scope="col" className="p-4">Nombre</th>
                    <th scope="col" className="p-4">Apellido</th>
                    <th scope="col" className="p-4">Correo Electronico</th>
                    <th scope="col" className="p-2">Celular</th>
                    {/* <th scope="col" className="p-2">Especialidad</th> */}
                    <th scope="col" className="p-4"># Consultorio</th>

                </tr>

            </thead>
            <tbody>                
                {
                    doctores.map(
                        (doctor,index)=>{
                            return(
                                <tr >
                                    <td>{doctor.idDoc}</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.lastName}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.mobile}</td>
                                    <td>{doctor.consultorio}</td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
}

export default DoctorTable