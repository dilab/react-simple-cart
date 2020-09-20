import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

function CartItems(props) {

    const items = [
        { id: 1, name: "Cat Tee Black T-Shirt", price: 10.90, imgLink: 'https://via.placeholder.com/150x200.png', quantity: 2, size: 'S' },
        { id: 2, name: "Cat Tee Black T-Shirt", price: 20.90, imgLink: 'https://via.placeholder.com/150x200.png', quantity: 2, size: 'M' },
        { id: 3, name: "Cat Tee Black T-Shirt", price: 30.90, imgLink: 'https://via.placeholder.com/150x200.png', quantity: 2, size: 'L' }
    ];

    const itemsContent = items.map((item) => {
        return <CartItem
            id={item.id}
            name={item.name}
            price={item.price}
            imgLink={item.imgLink}
            quantity={item.quantity}
            size={item.size}
            key={item.id}
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

