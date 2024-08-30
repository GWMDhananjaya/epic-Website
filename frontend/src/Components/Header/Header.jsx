import React from 'react'
import css from './Header.module.css'


function Header() {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        logo
      </div>

      <div className={css.right}>
        <div className={css.menu}>

        </div>

        <input type="text" className={css.search} />

        <span>cart</span>
      </div>
    </div>
  )
}

export default Header