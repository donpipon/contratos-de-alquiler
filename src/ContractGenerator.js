import React, {useState} from 'react';
import clsx from 'clsx';

const root = document.querySelector("#root");

var today = new Date();
const año = today.getFullYear()

function ContractGenerator () {

  const [contractDetails, setContractDetails] = useState(
    {
      tituloDeContrato: '',
      ciudadContrato: '',
      diaContrato: '',
      mesContrato: '',
      añoContrato: '',
      parteLocadora: '',
      parteLocataria: '',
      tipoDeContrato: '',
    }
  );

  const {
    tituloDeContrato = "Contrato de locación de vivienda",
    ciudadContrato,
    tipoDeContrato,
    diaContrato,
    mesContrato,
    añoContrato,
    parteLocadora,
    parteLocataria,
  } = contractDetails;
    
  // Construye el contenido del contrato
  const lugarYFecha = `${ciudadContrato}, ${diaContrato} de ${mesContrato} de ${añoContrato}`
  const introContrato = `Por una parte, ${parteLocadora}, en adelante denominada LOCADORA, 
  y por otra parte, ${parteLocataria}, en adelante denominada LOCATARIA, 
  todos mayores de edad, convienen en celebrar el presente ${tipoDeContrato}, 
  sujeto a las cláusulas siguientes y a las disposiciones del Código Civil y Comercial:\n\n`;
  
  return (
    <>
      <h1>Generador de Contrato de Alquiler</h1>
      <div>
      {/* Ingreso de datos */}
      <input type="text" value={tituloDeContrato} onChange={(e) => setContractDetails({ tituloDeContrato: e.target.value })} placeholder="Título del contrato" />
      <input type="text" value={tipoDeContrato} onChange={(e) => setContractDetails({ tipoDeContrato: e.target.value })} placeholder="Tipo de contrato" />
      <input type="text" value={ciudadContrato} onChange={(e) => setContractDetails({ ciudadContrato: e.target.value })} placeholder="Ciudad del contrato" />
      <input type="text" value={diaContrato} onChange={(e) => setContractDetails({ diaContrato: e.target.value })} placeholder="Día del contrato" />
      <input type="text" value={mesContrato} onChange={(e) => setContractDetails({ mesContrato: e.target.value })} placeholder="Mes del contrato" />
      <input type="text" value={añoContrato} onChange={(e) => setContractDetails({ añoContrato: e.target.value })} placeholder="Año del contrato" />
      <input type="text" value={parteLocadora} onChange={(e) => setContractDetails({ parteLocadora: e.target.value })} placeholder="Locadora" />
      <input type="text" value={parteLocataria} onChange={(e) => setContractDetails({ parteLocataria: e.target.value })} placeholder="Locataria" />
      </div>
      <div>
        <h5>Texto del Contrato:</h5>
        <h2>{tituloDeContrato}</h2>
        <h3>{lugarYFecha}</h3>
        <div><p>{introContrato}</p></div>
      </div>
    </>
  );
}

export default ContractGenerator;
