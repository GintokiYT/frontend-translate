const Form = ({message, setMessage, translate, handleTranslate, placeholder, buttonName}) => {
  return (  
    <div className='container-form'>
      <textarea
        className='message'
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
        autoFocus
      ></textarea>
      <button onClick={handleTranslate}>{buttonName}</button>
      <textarea
        className='result'
        placeholder='Esperando la respuesta...'
        disabled
        value={translate}
      ></textarea>
    </div>
  );
}
 
export default Form;