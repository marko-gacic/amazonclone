import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function Header() {
    return <nav className="header">
        <Link to="/">
            <img className="header__logo" src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt="" />
        </Link>
        <div className="header__search">


            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, Sign in</span>
                    <span className="header__optionLineTwo">Account</span>
                </div>
            </Link>
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <AddShoppingCartIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>

                </div>
            </Link>

        </div>
    </nav>
}

export default Header
