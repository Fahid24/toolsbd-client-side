import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddReview from './componants/pages/Dashboard/AddReview';
import Dashboard from './componants/pages/Dashboard/Dashboard';
import MyOrders from './componants/pages/Dashboard/MyOrders';
import MyProfile from './componants/pages/Dashboard/MyProfile';
import Home from './componants/pages/Home/Home';
import Navbar from './componants/pages/Home/Navbar/Navbar';
import Login from './componants/pages/Login/Login';
import RequiredAuth from './componants/pages/Login/RequiredAuth/RequiredAuth';
import Singup from './componants/pages/Login/Singup';
import Purchase from './componants/pages/Purchase/Purchase';
import Tools from './componants/pages/Tools';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools/:id' element={<RequiredAuth><Purchase></Purchase></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='/dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>

        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
