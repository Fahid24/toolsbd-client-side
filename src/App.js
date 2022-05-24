import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componants/pages/Home/Home';
import Navbar from './componants/pages/Home/Navbar/Navbar';
import Login from './componants/pages/Login/Login';
import Singup from './componants/pages/Login/Singup';
import Purchase from './componants/pages/Purchase/Purchase';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
      </Routes>

    </div>
  );
}

export default App;
