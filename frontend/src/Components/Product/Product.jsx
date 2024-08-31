import React,{useState} from 'react'
import css from "./Product.module.css"
//import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import {ProductsData} from "../../data/products";


function Product() {

    const [MenuProducts, setMenuProducts ] = useState(ProductsData); 

  return (
    <div className={css.container}>
        
        <h1>Our Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li>All</li>
                <li>Modification Parts</li>
                <li>Lights</li>
            </ul>

            <div className={css.list}>
                {
                    MenuProducts.map(( product , i ) =>(
                        <div className={css.Product}>
                            Product
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Product