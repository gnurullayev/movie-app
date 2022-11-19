import { useSelector } from "react-redux"
import { getDarcModeState } from "../../redux/darckMode.slice"
import Category from "../category/Category"
import Search from "../search/Search"
import styles from "./header.module.css"

const Header = () => {

  const {darckmode} = useSelector(getDarcModeState)
  return (
    <header className={`${styles.header} ${darckmode ? styles.dark : ""}`}>
      <Search/>
      <Category/>
    </header>
  )
}

export default Header