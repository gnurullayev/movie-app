import styles from "./search.module.css"
import { getDarcModeState } from "../../redux/darckMode.slice"
import { useSelector } from "react-redux";

import img from "../../assets/search1.svg";
import img2 from "../../assets/search2.svg";


const Search = () => {

  const {darckmode} = useSelector(getDarcModeState)

  return (
    <div className={styles.search}>
      <form className={styles.form}>
          <label className={`${styles.label} ${darckmode ? styles.dark : ""}`}>
            <input 
            className={styles.input} 
            type="text" 
            placeholder="Search"
            />
            <button className={styles.btn}>
              <img className={styles.img} src={darckmode ? img2 : img} alt="" />
            </button>
          </label>
      </form>
    </div>
  )
}

export default Search