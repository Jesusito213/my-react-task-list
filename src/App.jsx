import './App.css';
import 'react-icons/fa';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import SobreNosotrosPage from './pages/SobreNosotrosPage';
import TareaPage from './pages/TareaPage';
import HomePage from '../pages/Homepage';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sobre-nosotros' element={<SobreNosotrosPage />} />
          <Route path='/Tarea/:id' element={<TareaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
