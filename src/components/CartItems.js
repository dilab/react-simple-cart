import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

class CartItems extends React.Component {

    render() {
        const { items } = this.props;

        const itemsContent = items.map((item) => {
            return <CartItem
                id={item.id}
                name={item.name}
                price={item.price}
                imgLink={item.imgLink}
                size={item.size}
                key={item.id}
                quantity={item.quantity}
                onDecreaseItem={() => {
                    this.props.onDecreaseCartItem(item.id);
                }}
                onIncreaseItem={() => {
                    this.props.onIncreaseCartItem(item.id);
                }}
            />
        });

        return (
            <div>
                {itemsContent}
            </div>
        )
    }

}

CartItems.propTypes = {
    items: PropTypes.array,
    onDecreaseCartItem: PropTypes.func,
    onIncreaseCartItem: PropTypes.func
}

export default CartItems

