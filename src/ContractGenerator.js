import React from 'react';

const root = document.querySelector("#root");

var today = new Date();
const año = today.getFullYear()

class ContractGenerator extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        tituloDeContrato: '',
        ciudadContrato: '',
        diaContrato: '',
        mesContrato: '',
        añoContrato: '',
        parteLocadora: '',
        parteLocataria: '',
        tipoDeContrato: '',
      };
    }
  
    render() {
      const {
        tituloDeContrato,
        ciudadContrato,
        tipoDeContrato,
        diaContrato,
        mesContrato,
        añoContrato,
        parteLocadora,
        parteLocataria,
      } = this.state;
  
        
      // Construye el contenido del contrato
      const lugarYFecha = `${ciudadContrato}, ${diaContrato} de ${mesContrato} de ${añoContrato}`
      const introContrato = `Por una parte, ${parteLocadora}, en adelante denominada LOCADORA, 
      y por otra parte, ${parteLocataria}, en adelante denominada LOCATARIA, 
      todos mayores de edad, convienen en celebrar el presente ${tipoDeContrato}, 
      sujeto a las cláusulas siguientes y a las disposiciones del Código Civil y Comercial:\n\n`;
      
      return (
        <>
          <h1>Generador de Contrato de Alquiler</h1>
          <input type="text" value={tituloDeContrato} onChange={(e) => this.setState({ tituloDeContrato: e.target.value })} placeholder="Título del contrato" />
          <input type="text" value={tipoDeContrato} onChange={(e) => this.setState({ tipoDeContrato: e.target.value })} placeholder="Tipo de contrato" />
          <input type="text" value="Ciudad Autónoma de Buenos Aires" onChange={(e) => this.setState({ ciudadContrato: e.target.value })} placeholder="Ciudad del contrato" />
          <input type="text" value={diaContrato} onChange={(e) => this.setState({ diaContrato: e.target.value })} placeholder="Día del contrato" />
          <input type="text" value={mesContrato} onChange={(e) => this.setState({ mesContrato: e.target.value })} placeholder="Mes del contrato" />
          <input type="text" value={año} onChange={(e) => this.setState({ añoContrato: e.target.value })} placeholder="Año del contrato" />
          <input type="text" value={parteLocadora} onChange={(e) => this.setState({ parteLocadora: e.target.value })} placeholder="Locadora" />
          <input type="text" value={parteLocataria} onChange={(e) => this.setState({ parteLocataria: e.target.value })} placeholder="Locataria" />
          <div>
            <h5>Texto del Contrato:</h5>
            <h2>{tituloDeContrato}</h2>
            <h3>{lugarYFecha}</h3>
            <div><p>{introContrato}</p></div>
          </div>
        </>
      );
    }
  }
  
  export default ContractGenerator;
