import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componants/pages/Home/Home';
import Navbar from './componants/pages/Home/Navbar/Navbar';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
