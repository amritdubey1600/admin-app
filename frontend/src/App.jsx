import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Navbar } from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from './features/user/userSlice';

function App() {
  const userValue=useSelector(state=>state.user.userValue);
  const dispatch=useDispatch();
  
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'));
    
    if(user){
      dispatch(login(user));
    }
    
  }, [dispatch]);

  const isLoggedIn=userValue?.user;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn?<Navigate to='/dashboard' />:<Home />} />
        <Route path="/login" element={!isLoggedIn?<Login />:<Navigate to='/' />} />
        <Route path="/signup" element={!isLoggedIn?<Signup />:<Navigate to='/' />} />
        <Route path="/dashboard" element={isLoggedIn?<Dashboard />:<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
