
import './App.css';
import {  Routes,Route,BrowserRouter } from "react-router-dom";
import '@ant-design/v5-patch-for-react-19';
import'./stylesheet/alignment.css'
import './stylesheet/textelement.css'
import './stylesheet/list.css'
import './stylesheet/them.css'
import {Home } from './component/Home';
import { Login } from './pages/admin/Login';
import { Navbar } from './component/Navbar';
import { Header } from './component/Header';

function App() {
  const userRole = 'employee';
  return (
   <BrowserRouter>
   <Header/>
   <Navbar role={userRole} />
    <Routes>
      {/* <Route  path='/' element={<Home />}/> */}
      <Route path='/' element={<Home />} />  
      <Route path="/employee/login" />
      <Route path='/admin/login' element={<Login />} />
          
    </Routes>
   </BrowserRouter>
  );
}

export default App;
