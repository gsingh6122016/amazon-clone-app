import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from '../firebase';

function Header() {

  const basket = useSelector(state => state.basket);
  const user = useSelector(state => state.user);
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();


  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }


    return (
        <div className='header'>
          <Link to="/">
            <img className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>
            
            
            <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon"/>
            </div>
     
        <div className="header__nav">
        <Link to={!user && '/login'}>
        <div
        onClick={handleAuthentication}
        className="header__option">
          <span className="header__optionLineOne">Hello! { name? (name) :( user?.email)}</span>
          <span className="header__optionLineTwo">{user ? 
          'Sign Out':'Sign In'}</span>
        </div>
        </Link>
        
        <Link to='/orders'>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>
        

        {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}

       <Link to ="/checkout">
       <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo 
          header__basketCount">{basket?.length}</span>
        </div>
       </Link>

        

      </div>


        </div>
    )
}

export default Header
