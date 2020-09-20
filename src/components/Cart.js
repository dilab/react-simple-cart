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
            <CartHeader productsCount={props.productsCount} />
            <CartItems
                items={props.cartItems}
                onDecreaseCartItem={(id) => { props.onDecreaseCartItem(id) }}
                onIncreaseCartItem={(id) => { props.onIncreaseCartItem(id) }}
            />
            <CartFooter total={101} />
            <Checkout />
        </div>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array,
    productsCount: PropTypes.number,
    onDecreaseCartItem: PropTypes.func,
    onIncreaseCartItem: PropTypes.func
}

export default Cart

