import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
//import LogoIcon from "../../../components/riah-icon/riah.component.jsx"

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'


import './navigation.styles.css'

function Navigation(){
const {currentUser} = useContext(UserContext)
const {isCartOpen} = useContext(CartContext)

    return (
      <Fragment>
        <header className='navigation'>
          <Link className='logo-container' to='/'>
              <div>RIAH</div>
          </Link>
          <div className='nav-links-container'>
              <Link className='nav-link' to='/shop'>
                  SHOP
              </Link>
              {
                currentUser ? (
                  <span className='nav-link'onClick={signOutUser}>SIGN OUT</span>
                ) : (
                  <Link className='nav-link' to='/auth'>
                    SIGN IN
                </Link>
                )
              }
              <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </header>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation