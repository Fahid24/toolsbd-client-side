import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componants/pages/Home/Home';
import Navbar from './componants/pages/Home/Navbar/Navbar';
import Purchase from './componants/pages/Purchase/Purchase';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
      </Routes>

    </div>
  );
}

export default App;
