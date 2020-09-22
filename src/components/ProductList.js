import React from 'react';
import Product from './Product';
import ProductListHeader from './ProductListHeader';
import PropTypes from 'prop-types';


function ProductList(props) {

    const { products } = props;

    const productsContent = products.map((product) => {
        return (
            <div className="col-3" key={product.id}>
                <Product
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    size={product.size}
                    isFreeShipping={product.isFreeShipping}
                    imgLink={product.imgLink}
                    onAddToCart={() => { props.onAddToCart(product.id) }}
                />
            </div>
        )
    });

    return (
        <div>
            <ProductListHeader productsCount={products.length} />

            <div className="row">
                {productsContent}
            </div>
        </div>
    )
}


ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    onAddToCart: PropTypes.func
}

export default ProductList
