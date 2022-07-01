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
function App() {
  const {user}=useSelector((state)=>(
    state.user
  ));
  const dispatch=useDispatch();

  useEffect(()=>{
      var unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        console.log(userAuth.email);
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
      {
        !user ? (
          <>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
          </Routes>
          </>
        ):
        <>
        <Header/>
        <Routes>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
        </>
      }
    </Router>
    
  );
}

export default App;
