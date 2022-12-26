import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import CustomerSignup from './Pages/Authentication/Signup/CustomerSignup';
import ProviderSignup from './Pages/Authentication/Signup/ProviderSignup';
import Login from './Pages/Authentication/Login/Login';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/customersignup' element={<CustomerSignup />}></Route>
        <Route path='/providersignup' element={<ProviderSignup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
