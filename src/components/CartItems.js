import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

function CartItems(props) {
    return (
        <div>
            <CartItem
                name={"Cat Tee Black T-Shirt"}
                price={10.90}
                imgLink="https://via.placeholder.com/150x200.png"
                quantity={2}
                size={"S"}
            />
            <CartItem
                name={"Cat Tee Black T-Shirt"}
                price={10.90}
                imgLink="https://via.placeholder.com/150x200.png"
                quantity={2}
                size={"S"}
            />
        </div>
    )
}

CartItems.propTypes = {

}

export default CartItems

