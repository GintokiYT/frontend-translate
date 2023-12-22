import axios from 'axios';
import { useState } from 'react';
import { FaRobot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const Translate = () => {

  const navigate = useNavigate();

  const [ message, setMessage ] = useState('');
  const [ translate, setTranslate ] = useState('');

  const handleTranslate = async () => {
    setTranslate('');
    const response = await axios.post('http://localhost:5000/translate', {
      "text": message,
      "from": "auto",
      "to": "en"
    });
    setTranslate(response.data.response);
  }

  const handleNextPage = async () => {
    navigate('/chatgpt');
  }

  return (  
    <div className="container">
      <h1>Traductor a ingles</h1>
      <Form 
        message={message} 
        setMessage={setMessage} 
        translate={translate} 
        placeholder='Introduce el texto a traducir'
        handleTranslate={handleTranslate}
        buttonName='Traducir'
      />
      <div className='next-page' onClick={handleNextPage}> 
        <FaRobot />
      </div>
    </div>
  );
  
}
 
export default Translate;