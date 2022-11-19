import React, { useState } from 'react'
import styles from "./navbor.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { changeDarckMode, getDarcModeState } from '../../redux/darckMode.slice'

import heart from "../../assets/heart-icon.svg"
import basket from "../../assets/bascet-icon1.svg"
import home1 from "../../assets/home1.svg"
import home2 from "../../assets/home2.svg"
import moon from "../../assets/moon-icon.svg"
import arrowRight1 from "../../assets/right-arrov1.svg"
import basket2 from "../../assets/bascet-icon2.svg"
import soon from "../../assets/soon-icon.svg"
import { Link } from 'react-router-dom'
import { getAllLikeProducts } from '../wishList/wishList.slice'


const Navbor = () => {
  const [navWidth, setNavwidth] = useState<boolean>(true)

  const products = useSelector(getAllLikeProducts)
  const {darckmode} = useSelector(getDarcModeState)
  const dispatch = useDispatch()


  return (
    <nav className={`${styles.nav} ${navWidth ? styles.nav_active : ""} ${darckmode ? styles.dark : ""}`}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link to="/" className={styles.nav_link}>
            <img className={styles.user} src={darckmode ? home1 : home2} alt="" />
            <span className={styles.nav_link_span}>User</span>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/wishlist" className={`${styles.nav_link} ${styles.wishlist}`}>
            <img className={styles.nav_img} src={heart} alt="" />
            <span className={styles.nav_link_span}>WishList</span>
            <span className={styles.wishlist_count}>{products.length > 0 && products.length}</span>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/shop-carts" className={styles.nav_link}>
            <img className={styles.nav_img} src={darckmode ? basket : basket2} alt="" />
            <span className={styles.nav_link_span}>Cart</span>
            <span className={styles.shop_cart}>0</span>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <div className={`${styles.nav_link} ${styles.nav_link_mode}`} onClick={() => dispatch(changeDarckMode())}>
            <img className={styles.nav_img} src={darckmode ? moon : soon} alt="" />
            <span className={styles.nav_link_span}>{darckmode ? "Dark" : "Light"}</span>
            <span className={styles.input}>
              <input 
              id="checkbox" 
              className={styles.switch_input} 
              type="checkbox" 
              checked={darckmode}
              onChange={() => dispatch(changeDarckMode())}
              />
              <label htmlFor="checkbox" className={styles.switch}></label>
            </span>
          </div>
        </li> 

        <li className={styles.nav_item}>
          <button className={styles.btn} onClick={() => setNavwidth(prev => !prev)}>
            <img className={styles.btn_img} src={arrowRight1} alt="" />
          </button>
        </li> 
      </ul>
    </nav>
  )
}

export default Navbor