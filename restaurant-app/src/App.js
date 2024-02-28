import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rlist from './component/Rlist';
import Rcreate from './component/Rcreate'
import Rsearch from './component/Rsearch'
import Rupdate from './component/Rupdate'
import Signup from './component/Signup';
import Login from './component/Login';
import Routing from './component/Routing';
import Home from './component/Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/create" element={<Routing cmp={Rcreate}/>}/>
      <Route path="/list" element={<Routing cmp={Rlist}/>}/>
      <Route path="/search" element={<Routing cmp={Rsearch}/>}/>
      <Route path="/update/:id" element={<Rupdate/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
