import {Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>} exact></Route>
        <Route path='/profile' element={<Profile/>} exact></Route>
        <Route path='/' element={<Home/>} exact></Route>
      </Routes>
    </>
  );
}

export default App;
