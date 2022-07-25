import './App.css';
import './style.css'
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
//  Un estado es un lugar donde se alamacena una variable con una funcionalidad a desempeñar
// Variable linea1, función setLinea1 que permite modificar el valor de la variable
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');


  const onChangeLine1 = (evento)=>{
    setLinea1(evento.target.value)
  }
  const onChangeLine2 = (evento)=>{
    setLinea2(evento.target.value)
  }
  const onChangeImagen = (evento)=>{
    setImagen(evento.target.value)
  }
  const Exportar = (evento)=>{
    html2canvas(document.querySelector("#meme")).then(canvas => {
        let image = canvas.toDataURL('image/png');

        let link = document.createElement('a');
        link.download = 'meme.png';
        link.href = image;
        link.click();
    });
  }
  return (
    <div className="fondo" >
     
     {/* Select piker de memes, input text primer linea , input text, boton exportar*/}
     <div className='herramientas'>
      <h1>Herramientas</h1>
      <label>Seleccione la plantillas del meme:</label>     
        <select className='Selector' onChange={onChangeImagen} >
        <option value="plantilla-1.jpg">Chico con bate</option>
        <option value="plantilla-2.jpg">Philosoraptor</option>
      </select>
      <input onChange={onChangeLine1} type="text" placeholder='Texto Superior' />
      <input onChange={onChangeLine2} type="text" placeholder='Texto Inferior' />
      <button onClick={Exportar} >Descargar</button>
     </div>
      <div className='areaMeme' id='meme' >
        <span className='texto1' >{linea1}</span>
        <span className='texto2' >{linea2}</span>
        <img className='imagenMeme' src={'/img/'+imagen}></img>
      </div>
    </div>
  );
}

export default App;
