import React,{useState} from "react";
import "./Header.css";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Checkout from "./Checkout";

const Header=()=> {
const [{basket,user }, dispatch] = useStateValue();

const handleAuthentication = () => {
  if (user) {
    auth.signOut();
  }
}

  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primarye"> 
     <Link to="/">
        <img
            className="header__logo"
            src="https://mypillow.blob.core.windows.net/web/img/ms/ms-logo-1.png"
        /> 
        </Link>
        <div className="header__search">
            <input 
            className="header__searchInput" 
            type="text" />
            <ManageSearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>   
          <div onClick={handleAuthentication}className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'User' :user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' :'Sign In'}</span>
        </div>
        </Link>
        
        <Link to="/orders">   
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>  
        
        <Link to="/checkout">
        <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
        </div>
        </Link>

      </div>
       
      </nav> 
    

    
  );
}

export default Header;