import React, { useState } from 'react';
import { cifrarTexto, desCifrarTexto } from './funcion';
import './style.css'; 

const App = () => {
  const [texto, setTexto] = useState('');
  const [clave, setClave] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const Cifrar = () => {
    const textoCifrado = cifrarTexto(texto, clave);
    if (textoCifrado) {
      setTextoCifrado(textoCifrado);
    } else {
    }
  };

  const DesCifrar = () => {
    const textoDescifrado = desCifrarTexto(textoCifrado, clave);
    if (textoDescifrado) {
      setTextoDescifrado(textoDescifrado);
    } else {
    }
  };

  return (
    <div>
      <fieldset id="container">
        <legend>Cifrado AES</legend>
        <label htmlFor="Texto">Ingresa un texto:</label>
        <input type="text" id="Texto" value={texto} onChange={(e) => setTexto(e.target.value)} />
        <br /><br />
        <label htmlFor="clave">Clave:</label>
        <input type="number" id="clave" min={1} max={26} value={clave} onChange={(e) => setClave(e.target.value)} />
        <br /><br />
        <button onClick={Cifrar}>Cifrar</button>
        <p>Texto cifrado: <span id="outputText">{textoCifrado}</span></p>
        <label htmlFor="desciT">Ingresa el texto a descifrar</label>
        <input type="text" id="desciT" value={textoCifrado} onChange={(e) => setTextoCifrado(e.target.value)} />
        <br/><br/>
        <button className="descifrar" onClick={DesCifrar}>Descifrar</button>
        <p>Texto descifrado: <span id="desc">{textoDescifrado}</span></p>
      </fieldset>
    </div>
  );
};

export default App;
