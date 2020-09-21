import React from 'react'
import PropTypes from 'prop-types'
import CartHeader from './CartHeader'
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
                onDeleteCartItem={(id) => { props.onDeleteCartItem(id) }}
            />
            <CartFooter total={props.total} />
            <Checkout />
        </div>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array,
    productsCount: PropTypes.number,
    total: PropTypes.string,
    onDecreaseCartItem: PropTypes.func,
    onIncreaseCartItem: PropTypes.func,
    onDeleteCartItem: PropTypes.func,
}

export default Cart

