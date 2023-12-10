import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
