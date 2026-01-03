import { Link, NavLink } from 'react-router'
import  './header.css'
import SearchIcon from '../../assets/images/icons/search-icon.png'
import CartIcon from '../../assets/images/icons/cart-icon.png'
import LogoWhiteImage from '../../assets/images/logo-white.png'
import MobileLogoWhiteImage from '../../assets/images/mobile-logo-white.png'
import { totalItemsofArray } from '../../utils/totalItemofArray'

export function Header ({carts}) {
    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                <img className="logo"
                    src={LogoWhiteImage} />
                <img className="mobile-logo"
                    src={MobileLogoWhiteImage} />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                <img className="search-icon" src={SearchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                <span className="orders-text">Orders</span>
                </NavLink>
                <NavLink className="cart-link header-link" to="/checkout">
                <img className="cart-icon" src={CartIcon} />
                <div className="cart-quantity">{totalItemsofArray(carts)}</div>
                <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>

    )
}