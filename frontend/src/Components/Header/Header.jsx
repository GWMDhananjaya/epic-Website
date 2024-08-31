import React from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import { TiShoppingCart } from "react-icons/ti";


function Header() {
  return (
    <div className={css.topcontainer}>
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="" />
        
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>About</li>
            <li>Contact</li>
            <li>Location</li>
            <li>Product</li>
            
          </ul>

        </div>

        

        <TiShoppingCart  className={css.cart}/>
      </div>
    </div>
    </div>
  )
}

export default Header