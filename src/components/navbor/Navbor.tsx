import React, { useState } from 'react'
import styles from "./navbor.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { changeDarckMode, getDarcModeState } from '../../redux/darckMode.slice'

import heart from "../../assets/heart-icon.svg"
import basket from "../../assets/bascet-icon1.svg"
import user from "../../assets/user.svg"
import moon from "../../assets/moon-icon.svg"
import arrowRight1 from "../../assets/right-arrov1.svg"
import basket2 from "../../assets/bascet-icon2.svg"
import soon from "../../assets/soon-icon.svg"
import { Link } from 'react-router-dom'


const Navbor = () => {
  const [navWidth, setNavwidth] = useState<boolean>(true)

  const {darckmode} = useSelector(getDarcModeState)
  const dispatch = useDispatch()


  return (
    <nav className={`${styles.nav} ${navWidth ? styles.nav_active : ""} ${darckmode ? styles.dark : ""}`}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link to="/wishlist" className={styles.nav_link}>
            <img className={styles.nav_img} src={heart} alt="" />
            <span className={styles.nav_link_span}>WishList</span>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/shop-carts" className={styles.nav_link}>
            <img className={styles.nav_img} src={darckmode ? basket : basket2} alt="" />
            <span className={styles.nav_link_span}>Cart</span>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/user" className={styles.nav_link}>
            <img className={styles.user} src={user} alt="" />
            <span className={styles.nav_link_span}>User</span>
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