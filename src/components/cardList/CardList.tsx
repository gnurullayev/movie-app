import styles from "./cardList.module.css"
import { useEffect,} from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { filterProducts, getAllProducts } from './cardList.slice';

import { getDarcModeState } from "../../redux/darckMode.slice";
import CardItem from "../cardItem/CardItem";
// import CardItem from "../cardItem/CardItem";

const CardList = () => {
  const products = useSelector(getAllProducts)
  const {darckmode} = useSelector(getDarcModeState)
  
  return (
    <div className={`${styles.content} ${darckmode ? styles.dark : ""}`}>
      <h2 className={styles.title}>Trending items</h2>
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

export default CardList