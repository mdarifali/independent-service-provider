import './App.css';
import Header from './Componants/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import SingUp from './Componants/SingUp/SingUp';
import Footer from './Componants/Footer/Footer';
import Booking from './Componants/Booking/Booking';
import AboutMe from './Componants/About/AboutMe';
import RequireAuth from './Componants/Auth/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/bookingcart' element={
          <RequireAuth>
            <Booking />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
