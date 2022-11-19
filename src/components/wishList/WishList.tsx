import React from 'react'
import { useSelector } from 'react-redux'
import { getAllLikeProducts } from './wishList.slice'
import styles from "../cardList//cardList.module.css"
import { getDarcModeState } from '../../redux/darckMode.slice'
import CardItem from '../cardItem/CardItem'

const WishList = () => {

  const products = useSelector(getAllLikeProducts)
  const {darckmode} = useSelector(getDarcModeState)
  
  return (
    <div className={`${styles.content} ${darckmode ? styles.dark : ""}`}>
    <h2 className={styles.title}>Like products</h2>
    <ul className={styles.list}>
      {
        products.map(product => (
         <CardItem key = {product.id} {...product}/>
        ))
      }
    </ul>
  </div>
  )
}

export default WishList