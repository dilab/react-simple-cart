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
            isCartOpen: false,
            filters: [
                { value: 'S', checked: false },
                { value: 'M', checked: false },
                { value: 'L', checked: false },
                { value: 'XL', checked: false },
            ],
            cartItems: [],
            filteredProducts: [],
            products: [
                {
                    id: 1,
                    size: 'S',
                    name: 'Thrasher Flame Black T-Shirt',
                    price: 10.90,
                    isFreeShipping: true,
                    imgLink: 'img/p1.png'
                },
                {
                    id: 2,
                    size: 'M',
                    name: 'Cat Tee Black T-Shirt',
                    price: 20.90,
                    isFreeShipping: false,
                    imgLink: 'img/p2.png'
                },
                {
                    id: 3,
                    size: 'L',
                    name: 'Thrasher Roses Black T-Shirt',
                    price: 30.90,
                    isFreeShipping: true,
                    imgLink: 'img/p3.png'
                },
                {
                    id: 4,
                    size: 'XL',
                    name: 'Primitive Lantern Black T-Shirt',
                    price: 40.90,
                    isFreeShipping: false,
                    imgLink: 'img/p4.png'
                },
                {
                    id: 5,
                    size: 'S',
                    name: 'Primitive Moods Green Dye Long Sleeve T-Shirt',
                    price: 10.90,
                    isFreeShipping: true,
                    imgLink: 'img/p5.png'
                },
                {
                    id: 6,
                    size: 'S',
                    name: 'Vans x Santa Cruz Check Black T-Shirt',
                    price: 10.90,
                    isFreeShipping: true,
                    imgLink: 'img/p6.png'
                },
                {
                    id: 7,
                    size: 'S',
                    name: 'Vans x Santa Cruz Wall Grab Black T-Shirt',
                    price: 10.90,
                    isFreeShipping: true,
                    imgLink: 'img/p7.png'
                },
                {
                    id: 8,
                    size: 'S',
                    name: 'A-Lab Wizard Stuff Black T-Shirt',
                    price: 10.90,
                    isFreeShipping: true,
                    imgLink: 'img/p8.png'
                },
            ]
        }
    }


    render() {

        const { cartItems, filters, filteredProducts } = this.state;

        return (

            <>
                <Cart
                    cartItems={cartItems}
                    productsCount={this.countProducts()}
                    onDecreaseCartItem={(id) => { this.handleDecreaseCartItem(id) }}
                    onIncreaseCartItem={(id) => { this.handleIncreaseCartItem(id) }}
                    onDeleteCartItem={(id) => { this.handleDeleteCartItem(id) }}
                    total={this.computeTotal()}
                    isCartOpen={this.state.isCartOpen}
                    onClickHeader={() => { this.handleClickHeader() }}
                />

                <div className={"container-fluid mt-5" + (this.state.isCartOpen ? " d-none" : "")}>
                    <div className="row">
                        <div className="col-2">
                            <Filter
                                options={filters}
                                onToggle={(optionValue) => { this.handleFilterToggle(optionValue) }}
                            />
                        </div>
                        <div className="col-10">
                            <ProductList
                                products={filteredProducts}
                                onAddToCart={(id) => { this.handleAddToCart(id) }}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    handleClickHeader() {
        const result = this.state.isCartOpen;

        this.setState({
            isCartOpen: !result
        })
    }

    handleAddToCart(id) {
        const items = this.state.cartItems.slice();
        const indexFound = items.findIndex(product => product.id === id);

        if (-1 !== indexFound) {
            this.handleIncreaseCartItem(id);
            return;
        }


        let newItem = this.state.products.find(product => product.id === id);
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

    handleFilterToggle(filterOption) {
        const filterOptions = this.state.filters.slice();
        const indexFound = filterOptions.findIndex(option => option.value === filterOption)
        const itemFound = filterOptions[indexFound];
        filterOptions[indexFound] = Object.assign({}, itemFound, { checked: !itemFound.checked });

        this.setState({ filters: filterOptions })

        this.filterProducts(filterOptions);
    }

    filterProducts(filterOptions) {
        let products = this.state.products.slice();

        const filteredOptionValues = filterOptions
            .filter((option) => { return option.checked })
            .map((option) => { return option.value });

        if (filteredOptionValues.length === 0) {
            this.setState(
                { filteredProducts: products }
            )
            return;
        }

        products = products.filter((product) => {
            return -1 !== filteredOptionValues.indexOf(product.size);
        })

        this.setState(
            { filteredProducts: products }
        )
        return;
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

    componentDidMount() {
        this.filterProducts([])
    }
}


ShoppingCart.propTypes = {

}

export default ShoppingCart

