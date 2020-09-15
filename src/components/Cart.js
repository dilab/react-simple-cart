import React from 'react'
import PropTypes from 'prop-types'
import CartHeader from './CartHeader'
import CartItem from './CartItem'
import CartFooter from './CartFooter'
import Checkout from './Checkout'
import CartItems from './CartItems'

function Cart(props) {
    return (
        <div>
            <CartHeader productsCount={2} />
            <CartItems />
            <CartFooter total={101} />
            <Checkout />
        </div>
    )
}

Cart.propTypes = {

}

export default Cart

