import React,{useState} from 'react'
import css from "./Product.module.css"
//import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import {ProductsData} from "../../data/products";


function Product() {

    const [MenuProducts, setMenuProducts ] = useState(ProductsData); 

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }
  return (
    <div className={css.container}>
        
        <h1>Our Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Modification Parts</li>
                <li>Lights</li>
            </ul>

            <div className={css.list}>
                {
                    MenuProducts.map(( product , i ) =>(
                        <div className={css.product}>
                            <div className='left-s'>
                                <div className='name'>
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Shop now</div>
                            </div>
                            <img src={product.img} alt="" className='img-p'/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Product