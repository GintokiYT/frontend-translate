import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BsTranslate } from "react-icons/bs";
import Form from '../components/Form';

const Chatgpt = () => {

  const navigate = useNavigate();

  const [ message, setMessage ] = useState('');
  const [ chatgpt, setChagpt ] = useState('');

  const handleChatgpt = async () => {
    setChagpt('');
    const response = await axios.post('http://localhost:5000/chatgpt', {
      "text": message
    });
    const result = JSON.parse(response.data);
    setChagpt(result.choices[0].message.content);
  }

  const handleNextPage = () => {
    navigate('/');
  }

  return (  
    <div className="container">
      <h1>Chat gpt</h1>
      <Form 
        message={message}
        setMessage={setMessage}
        translate={chatgpt}
        placeholder='Ingresa tu consulta'
        handleTranslate={handleChatgpt}
        buttonName='Obtener respuesta'
      />
      <div className='next-page' onClick={handleNextPage}> 
        <BsTranslate />
      </div>
    </div>
  );
}
 
export default Chatgpt;