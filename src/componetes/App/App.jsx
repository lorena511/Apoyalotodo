
import { Component } from "react"; 

class App extends Component{
  constructor(props){
    super(props);
      this.state ={edad: 25, nombre: "Gabi", Apellido: "Fleitas",colorPelo: "castaño" };
     this.state.persona = {
        edad: 30,
        nombre: "Lorena",
        Apellido: "Ayala",
        colorPelo: "negro"
      };
    } 
aumentarEdad =() =>{
  this.setState ({
    edad: this.state.edad + 1
   });
  }
  render = () => {
    return(
      <>
      <h3> {this.state.nombre}, {this.state.Apellido} </h3>
      <p> Edad: {this.state.edad} </p>
      <p>color de pelo: {this.state.colorPelo} </p>
      <button onClick={this.aumentarEdad}>aumentarEdad</button>
      <h3> {this.state.persona.nombre}, {this.state.persona.Apellido} </h3>
      <p> Edad: {this.state.persona.edad} </p>
      <p>color de pelo: {this.state.persona.colorPelo} </p>
      <button onClick={this.aumentarEdad}>nuevoEdad</button>
      
      </>
    );
  }
}
export default App
