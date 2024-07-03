const Estudiante = (props) =>{
return(
    <>
        <h3> Nombre:(props.nombre) (props.apellido) </h3>
        <p>Edad: (props.edad) </p>
        <p>colordepelo: (props.colordepelo) </p>
    </>
    );
}
 export default Estudiante;

