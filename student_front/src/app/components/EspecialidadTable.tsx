
//importaciones


//interfaz del estudiante
interface Especialidad{
    description:string
}

//Interfaz para el conjunto de estudiantes
interface EspecialidadTableProps{
    especialidades: Especialidad[]
}

//Definir el componente de FC, crear un listado en la funcion map

const EspecialidadTable:React.FC<EspecialidadTableProps>= ({especialidades})=>{

    console.log(especialidades)
    return(
        <table className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <thead>
                <tr>
                    <th scope="col" className="p-4">Descripcion</th>                    
                </tr>

            </thead>
            <tbody>                
                {
                    especialidades.map(
                        (especialidad,index)=>{
                            return(
                                <tr >
                                    <td>{especialidad.description}</td>                       
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
}

export default EspecialidadTable