import React from 'react'
import Product from './Product'
import ProductListHeader from './ProductListHeader'

function ProductList() {
    return (
        <div>
            <ProductListHeader productsCount={3} />

            <div class="row">
                <div class="col-3">
                    <Product
                        name="Cat Tee Black T-Shirt"
                        price={10.90}
                        isFreeShipping={true}
                        imgLink="https://via.placeholder.com/300x400.png"
                    />
                </div>

                <div class="col-3">
                    <Product
                        name="Cat Tee Black T-Shirt"
                        price={10.90}
                        isFreeShipping={true}
                        imgLink="https://via.placeholder.com/300x400.png"
                    />
                </div>


                <div class="col-3">
                    <Product
                        name="Cat Tee Black T-Shirt"
                        price={10.90}
                        isFreeShipping={true}
                        imgLink="https://via.placeholder.com/300x400.png"
                    />
                </div>

            </div>
        </div>
    )
}

export default ProductList
