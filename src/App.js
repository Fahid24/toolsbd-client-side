import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './componants/pages/Dashboard/Dashboard';
import Home from './componants/pages/Home/Home';
import Navbar from './componants/pages/Home/Navbar/Navbar';
import Login from './componants/pages/Login/Login';
import RequiredAuth from './componants/pages/Login/RequiredAuth/RequiredAuth';
import Singup from './componants/pages/Login/Singup';
import Purchase from './componants/pages/Purchase/Purchase';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<RequiredAuth><Purchase></Purchase></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>

    </div>
  );
}

export default App;
