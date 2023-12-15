import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [ message, setMessage ] = useState('');
  const [ translate, setTranslate ] = useState('');

  const handleTranslate = async() => {
    setTranslate('');
    const response = await axios.post('http://localhost:5000/translate', {
      "text": message,
      "from": "auto",
      "to": "en"
    });
    setTranslate(response.data.response);
  }

  return (  
    <div className="container">
      <h1>Traductor a ingles</h1>
      <div className='container-form'>
        <textarea
          className='message'
          placeholder='Introduce el texto a traducir'
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
        ></textarea>
        <button onClick={handleTranslate}>Traducir</button>
        <textarea
          className='result'
          placeholder='Esperando la respuesta...'
          disabled
          value={translate}
        ></textarea>
      </div>
    </div>
  );
}
 
export default App;