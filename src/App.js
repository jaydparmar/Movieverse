import Home from './Components/Home/Home';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Components/Header/Header';
import Login from './Components/LoginScreen/LoginScreen'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout} from './Features/UserSlice'
import Profile from './Components/ProfileScreen/Profile'
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import UnProtectedRoutes from './Components/PrivateRoutes/UnProtectedRoutes';

function App() {
  const {user}=useSelector((state)=>(
    state.user
  ));
  const dispatch=useDispatch();

  useEffect(()=>{
      var unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        //this is for when user login
        dispatch(
          login({
              uid:userAuth.uid,
              email:userAuth.email,
          })
        );
      }
      else{
        //this is for when use logout
        dispatch(logout());
      }
      
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<PrivateRoutes />} >
            <Route exact path='/' element={<Home />} />
            <Route exact path='/profile' element={<Profile />} />
          </Route>

          <Route exact path='/' element={<UnProtectedRoutes />} >
            <Route exact path='/login' element={<Login />} />
          </Route>
        </Routes>
    </Router>
    
  );
}

export default App;
