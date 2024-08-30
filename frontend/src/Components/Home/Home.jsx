import React from 'react'
import HomeImg from '../../assets/main.png'
import css from './Home.module.css'
import {RiShoppingBagFill} from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'; 


function Home() {
  return (
    <div className={css.container}>
        <div className={css.h_sides}>
            <span className={css.text1}>xxxxxxxxxxx</span>
            
            <div className={css.text2}>

                <span>Owned By Nuwan </span>
                <span>xxxxxxxx xxxxxx xxxxxx xxxxxxx xxxx xxxx</span>

            </div>
        </div>

        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={HomeImg} alt=""  className={css.homeimg} width={300} />
            <div className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>

                    <span>Best Signup Offers</span>

                    <div>
                    <BsArrowRight />
                    </div>
                </div>
            </div>

        </div>

        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>

            <div className={css.customers}>
                <span>100k</span>
                <span>happy Customers</span>

            </div>

        </div>
    </div>
  )
}

export default Home