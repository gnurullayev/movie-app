import {FunctionComponent} from 'react'
import styles from "../cardList/cardList.module.css"
import { Link } from 'react-router-dom'

import basket2 from "../../assets/bascet-icon2.svg"
import basket1 from "../../assets/bascet-icon1.svg"
import heart1 from "../../assets/card-heart1.svg"
import { useSelector } from 'react-redux'
import { getDarcModeState } from '../../redux/darckMode.slice'

interface Rating {
  rate: number;
  count: string;
}

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price:number;
  rating:Rating
  title: string;
}

const CardItem:FunctionComponent<Product> = ({title,image,price,id,category,rating}) => {
  // console.log();

  const {darckmode} = useSelector(getDarcModeState)
  
  return (
    <Link to="/" className={styles.card_link}>
      <li className={styles.item}>
        <div className={styles.card}>
          <div className={styles.card_img}>
            <img className={styles.img} src={image} alt="" />
          </div>
        </div>
        <div className={styles.card_body}>
          <h3 className={styles.card_title}>
            {title.slice(0,25)}...
          </h3>
          
          <p className={styles.text}>Category: <b className={styles.text_span}>{category}</b></p>
    
          <p className={styles.text} >Rate: <b className={styles.text_span}>{rating.rate}</b></p>
    
          <p className={styles.text} >Count: <b className={styles.text_span}>{rating.count}</b></p>
    
          <div className={styles.card_footer}>
            <b className={styles.text_span}>$ {price}</b>
    
            <button className={styles.btn}>
              <img className={styles.btn_img} src={darckmode ? basket1 : basket2} alt=""  />
            </button>
    
            <button className={styles.btn}>
              <img className={styles.btn_img} src={heart1} alt=""  />
            </button>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default CardItem