import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './componants/pages/Dashboard/Dashboard';
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
        <Route path='/purchase' element={<RequiredAuth><Purchase></Purchase></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='/dashboard' element={<RequiredAuth><Dashboard>

          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Dashboard></RequiredAuth>}></Route>
      </Routes>

    </div>
  );
}

export default App;
