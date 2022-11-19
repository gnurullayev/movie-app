import React from 'react'
import { useSelector } from 'react-redux'
import { getDarcModeState } from '../../redux/darckMode.slice'
import styles from "./category.module.css"

const Category = () => {

  const {darckmode} = useSelector(getDarcModeState)

  return (
    <ul className={`${styles.category} ${darckmode ? styles.dark : ""}`}>
      <li className={styles.item}>
        <a href="/" className={styles.link}>
         electronics
        </a>
      </li>

      <li className={styles.item}>
        <a href="/" className={styles.link}>
          jewelery
        </a>
      </li>

      <li className={styles.item}>
        <a href="/" className={styles.link}>
          men's clothing
        </a>
      </li>


      <li className={styles.item}>
        <a href="/" className={styles.link}>
          women's clothing
        </a>
      </li>
    </ul>
  )
}

export default Category