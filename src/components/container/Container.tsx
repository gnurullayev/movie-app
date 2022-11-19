import {ReactNode} from 'react'
import styles from "./container.module.css"

interface Container   {
  children: ReactNode
}
const Container = ({children}:Container) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container