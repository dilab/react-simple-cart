import { render } from '@testing-library/react'
import React from 'react'
import Cart from './Cart'
import Filter from './Filter'
import ProductList from './ProductList'
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {

    constructor() {
        super();

        this.state = {
            cartItems: [
                // {
                //     id: 1,
                //     name: "Cat Tee Black T-Shirt",
                //     price: 10.90,
                //     imgLink: 'https://via.placeholder.com/150x200.png',
                //     size: 'S',
                //     quantity: 1,
                // },
                // {
                //     id: 2,
                //     name: "Cat Tee Black T-Shirt",
                //     price: 20.90,
                //     imgLink: 'https://via.placeholder.com/150x200.png',
                //     size: 'M',
                //     quantity: 2,
                // }
            ]
        }
    }


    render() {
        const { cartItems } = this.state;
        return (
            <div className="row">
                <div className="col-2">
                    <Filter />
                </div>
                <div className="col-10">
                    <ProductList
                        products={this.props.products}
                        onAddToCart={(id) => { this.handleAddToCart(id) }}
                    />
                </div>
                <div className="container mt-5" style={{ maxWidth: 540 }}>
                    <Cart
                        cartItems={cartItems}
                        productsCount={this.countProducts()}
                        onDecreaseCartItem={(id) => { this.handleDecreaseCartItem(id) }}
                        onIncreaseCartItem={(id) => { this.handleIncreaseCartItem(id) }}
                        onDeleteCartItem={(id) => { this.handleDeleteCartItem(id) }}
                        total={this.computeTotal()}
                    />
                </div>
            </div>
        )
    }

    handleAddToCart(id) {
        const items = this.state.cartItems.slice();
        const indexFound = items.findIndex(product => product.id === id);

        if (-1 !== indexFound) {
            this.handleIncreaseCartItem(id);
            return;
        }


        let newItem = this.props.products.find(product => product.id === id);
        newItem.quantity = 1;
        const newItems = [...items, newItem];
        this.setState({
            cartItems: newItems
        })
    }

    handleDecreaseCartItem(id) {
        const items = this.state.cartItems.slice();
        const indexFound = items.findIndex(product => product.id === id);
        const itemFound = items[indexFound];
        const updateQty = itemFound.quantity - 1;

        if (0 === updateQty) {
            items.splice(indexFound, 1)
        } else {
            items[indexFound] = Object.assign({}, itemFound, { quantity: updateQty });
        }


        this.setState({
            cartItems: items
        })
    }

    handleIncreaseCartItem(id) {
        const items = this.state.cartItems.slice();
        const indexFound = items.findIndex(product => product.id === id);
        const itemFound = items[indexFound];
        items[indexFound] = Object.assign({}, itemFound, { quantity: itemFound.quantity + 1 });

        this.setState({
            cartItems: items
        })
    }

    handleDeleteCartItem(id) {
        const items = this.state.cartItems.slice();
        const indexFound = items.findIndex(product => product.id === id);
        items.splice(indexFound, 1);
        this.setState({
            cartItems: items
        })
    }

    countProducts() {
        return this.state.cartItems.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.quantity;
        }, 0)
    }

    computeTotal() {
        let total = this.state.cartItems.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.quantity * currentValue.price;
        }, 0)
        return total.toFixed(2);
    }
}


ShoppingCart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}

export default ShoppingCart

