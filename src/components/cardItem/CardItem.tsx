import {FunctionComponent, useEffect} from 'react'
import styles from "../cardList/cardList.module.css"
import { Link, useNavigate } from 'react-router-dom'

import basket2 from "../../assets/bascet-icon2.svg"
import basket1 from "../../assets/bascet-icon1.svg"
import heart1 from "../../assets/card-heart1.svg"
import heart2 from "../../assets/heart-icon.svg"
import { useDispatch, useSelector } from 'react-redux'
import { getDarcModeState } from '../../redux/darckMode.slice'
import { filterProducts, getAllProducts } from '../cardList/cardList.slice'
import { allLikeProduct } from '../wishList/wishList.slice'

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
  quanitity:number;
  like:boolean;
}

const CardItem:FunctionComponent<Product> = ({title,image,price,id,category,rating,quanitity,like}) => {

  const {darckmode} = useSelector(getDarcModeState)
  const products = useSelector(getAllProducts);

  const dispatch = useDispatch();

  const changeLike = (id:number) => {
    const newArr = products.map((product:Product) => {
      if(id === product.id) return {...product, like:!product.like}
      return product
    })

    dispatch(filterProducts(newArr))
    dispatch(allLikeProduct(newArr))
  }
  
  return (
      <li className={styles.item}>
        <div className={styles.card}>
          <div className={styles.card_img}>
            <img className={styles.img} src={image} alt="" />
          </div>
        </div>
        <div className={styles.card_body}>
          <h3 className={styles.card_title}>
            {title.slice(0,28)}...
          </h3>
          
          <p className={styles.text}>Category: <b className={styles.text_span}>{category}</b></p>
    
          <p className={styles.text} >Rate: <b className={styles.text_span}>{rating.rate}</b></p>
    
          <p className={styles.text} >Count: <b className={styles.text_span}>{rating.count}</b></p>
    
          <div className={styles.card_footer}>
            <b className={styles.text_span}>$ {price}</b>
    
            <button className={styles.btn}>
              <img className={styles.btn_img} src={darckmode ? basket1 : basket2} alt=""  />
            </button>
    
            <button className={styles.btn} onClick={() => changeLike(id)}>
              <img className={styles.btn_img} src={like ? heart2 : heart1} alt=""  />
            </button>           
          </div>

          <Link to="/product-details" className={styles.more}>
            More info
          </Link>
        </div>
      </li>
  )
}

export default CardItem