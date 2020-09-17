import React from 'react'
import Product from './Product'
import ProductListHeader from './ProductListHeader'

function ProductList() {

    const products = [
        { id: 1, price: 10.90, isFreeShipping: true, imgLink: 'https://via.placeholder.com/300x400.png' },
        { id: 2, price: 10.90, isFreeShipping: false, imgLink: 'https://via.placeholder.com/300x400.png' },
        { id: 3, price: 10.90, isFreeShipping: true, imgLink: 'https://via.placeholder.com/300x400.png' },
        { id: 1, price: 10.90, isFreeShipping: false, imgLink: 'https://via.placeholder.com/300x400.png' },
    ];

    const productsContent = products.map((product) => {
        return (
            <div class="col-3">
                <Product
                    name={product.name}
                    price={product.price}
                    isFreeShipping={product.isFreeShipping}
                    imgLink={product.imgLink}
                />
            </div>
        )
    });

    return (
        <div>
            <ProductListHeader productsCount={3} />

            <div class="row">
                {productsContent}
            </div>
        </div>
    )
}

export default ProductList
