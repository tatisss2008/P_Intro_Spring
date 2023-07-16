
//importaciones


//interfaz del estudiante
interface Paciente{
    idDoc:string,
    name:string,
    lastName:string,
    email:string,
    mobile:string,
    dateOfBirth: string
}

//Interfaz para el conjunto de estudiantes
interface PacienteTableProps{
    pacientes: Paciente[]
}

//Definir el componente de FC, crear un listado en la funcion map

const PacienteTable:React.FC<PacienteTableProps>= ({pacientes})=>{

    console.log(pacientes)
    return(
        <table className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <thead>
                <tr>
                    <th scope="col" className="p-4">Identificacion</th>
                    <th scope="col" className="p-4">Nombre</th>
                    <th scope="col" className="p-4">Apellido</th>
                    <th scope="col" className="p-4">Correo Electronico</th>
                    <th scope="col" className="p-4">Celular</th>
                    <th scope="col" className="p-4">Fecha de Nacimiento</th>
                </tr>

            </thead>
            <tbody>               
                {
                    pacientes.map(
                        (paciente,index)=>{
                            return(
                                <tr >
                                    <td>{paciente.idDoc}</td>
                                    <td>{paciente.name}</td>
                                    <td>{paciente.lastName}</td>
                                    <td>{paciente.email}</td>
                                    <td>{paciente.mobile}</td>
                                    <td>{paciente.dateOfBirth}</td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
}

export default PacienteTable