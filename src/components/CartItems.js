import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

function CartItems(props) {

    const items = [
        { id: 1, price: 10.90, imgLink: 'https://via.placeholder.com/150x200.png', quantity: 2, size: 'S' },
        { id: 2, price: 20.90, imgLink: 'https://via.placeholder.com/150x200.png', quantity: 2, size: 'M' },
        { id: 3, price: 30.90, imgLink: 'https://via.placeholder.com/150x200.png', quantity: 2, size: 'L' }
    ];

    const itemsContent = items.map((item) => {
        return <CartItem
            name={item.id}
            price={item.price}
            imgLink={item.imgLink}
            quantity={item.quantity}
            size={item.size}
        />
    });

    return (
        <div>
            {itemsContent}
        </div>
    )
}

CartItems.propTypes = {

}

export default CartItems

