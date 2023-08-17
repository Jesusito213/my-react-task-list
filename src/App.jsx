import './App.css';
import 'react-icons/fa';
import MenuNav from './pages/MenuNav'
import Home from './pages/Home'
import SobreMi from './pages/SobreMi'
import TaskAppPage from './pages/TaskAppPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div> <BrowserRouter>
    <MenuNav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre-mi' element={<SobreMi />} />
      <Route path='/Tarea/:id' element={<TaskAppPage />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
