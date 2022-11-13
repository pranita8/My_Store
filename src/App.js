import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";
import { ToastContainer } from "react-toastify";


const promise =loadStripe("pk_test_51M2TqlSJVShvBXNnrabXR4sPTgyL75lpsepj35MStO2a9nVP786EgfQq7UcPntK7it2zUiFslHSOIbGDK75pyxME00s4OunIN9");
 

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when app components loads..
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>",authUser);
      if (authUser) {
       //the user just logged in / the user was logged in 
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    //use react router dom-->it use basically to  move one page to another page
    
    <Router>
      <div className="app">
      
      <Routes> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/orders' element={<><Header/><Orders/></>}/>
      <Route path='/checkout' element={<><Header/><Checkout/></>}/>
      <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
      <Route path='/' element = {<><Header/><Home/></>}/>
      </Routes>
      </div>
      <ToastContainer style={{ marginTop: "45px" }} />
    </Router>
    
  );
}

export default App;
