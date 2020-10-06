import React from 'react'
import PropTypes from 'prop-types'
import CartHeader from './CartHeader'
import CartBody from './CartBody'

function Cart(props) {
    const style = { maxWidth: '540px', margin: 'auto' };

    return (
        <>
            <CartHeader
                productsCount={props.productsCount}
                onClickHeader={props.onClickHeader}
            />
            <div className={"container-fluid" + (!props.isCartOpen ? " d-none" : "")}>
                <div style={style}>
                    <CartBody
                        items={props.cartItems}
                        onDecreaseCartItem={(id) => { props.onDecreaseCartItem(id) }}
                        onIncreaseCartItem={(id) => { props.onIncreaseCartItem(id) }}
                        onDeleteCartItem={(id) => { props.onDeleteCartItem(id) }}
                        total={props.total}
                    />
                </div>
            </div>
        </>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array,
    productsCount: PropTypes.number,
    total: PropTypes.string,
    isCartOpen: PropTypes.bool,
    onDecreaseCartItem: PropTypes.func,
    onIncreaseCartItem: PropTypes.func,
    onDeleteCartItem: PropTypes.func,
    onClickHeader: PropTypes.func,
}

export default Cart

