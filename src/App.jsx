import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Translate from './pages/translate';
import Chatgpt from './pages/chatgpt';

const App = () => {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Translate />}/>
        <Route path='/chatgpt' element={<Chatgpt />}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;