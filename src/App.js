import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Routes>
         {/* <Routes path='/login' element={<Login></Login>}></Routes> */}
      </Routes>
    </div>
  );
}

export default App;
