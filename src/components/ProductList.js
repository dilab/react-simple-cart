import React from 'react'
import Product from './Product'
import ProductListHeader from './ProductListHeader'

function ProductList() {

    const products = [
        { id: 1, name: "Cat Tee Black T-Shirt", price: 10.90, isFreeShipping: true, imgLink: 'https://via.placeholder.com/300x400.png' },
        { id: 2, name: "Cat Tee Black T-Shirt", price: 10.90, isFreeShipping: false, imgLink: 'https://via.placeholder.com/300x400.png' },
        { id: 3, name: "Cat Tee Black T-Shirt", price: 10.90, isFreeShipping: true, imgLink: 'https://via.placeholder.com/300x400.png' },
        { id: 4, name: "Cat Tee Black T-Shirt", price: 10.90, isFreeShipping: false, imgLink: 'https://via.placeholder.com/300x400.png' },
    ];

    const productsContent = products.map((product) => {
        return (
            <div className="col-3" key={product.id}>
                <Product
                    id={product.id}
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

            <div className="row">
                {productsContent}
            </div>
        </div>
    )
}

export default ProductList
