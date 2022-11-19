import styles from "./main.module.css"
import { Routes, Route} from 'react-router-dom';
import CardList from '../cardList/CardList';
import ShopList from '../shopList/ShopList';
import WishList from '../wishList/WishList';
import Navbor from '../navbor/Navbor';

const Main = () => {
  return (
    <div className={styles.main}>
        <div className="main_content">
            <Routes>
                <Route path='/' element={<CardList/>}/>
                <Route path='/cart' element={<ShopList/>}/>
                <Route path='/wishlist' element={<WishList/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Main