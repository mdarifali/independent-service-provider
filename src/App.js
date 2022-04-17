import './App.css';
import Header from './Componants/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
