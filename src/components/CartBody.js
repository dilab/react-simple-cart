import React from 'react'
import PropTypes from 'prop-types'
import CartItems from './CartItems'
import CartSubtotal from './CartSubtotal'
import CartCheckout from './CartCheckout'

function CartBody(props) {
    return (
        <>
            <CartItems
                items={props.items}
                onDecreaseCartItem={(id) => { props.onDecreaseCartItem(id) }}
                onIncreaseCartItem={(id) => { props.onIncreaseCartItem(id) }}
                onDeleteCartItem={(id) => { props.onDeleteCartItem(id) }}
            />
            <CartSubtotal total={props.total} />
            <CartCheckout />
        </>
    )
}

CartBody.propTypes = {
    items: PropTypes.array,
    onDecreaseCartItem: PropTypes.func,
    onIncreaseCartItem: PropTypes.func,
    onDeleteCartItem: PropTypes.func,
    total: PropTypes.string,
}

export default CartBody

