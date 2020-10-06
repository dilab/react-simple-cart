import React from 'react'
import PropTypes from 'prop-types'

function Product(props) {
    let { isFreeShipping } = props;

    return (
        <div className="card text-center">

            {isFreeShipping &&
                <span className="badge badge-info position-absolute m-1">Free shipping</span>}

            <img src={props.imgLink} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h6 className="card-title">{props.name}</h6>
                <h6 className="card-title">Size: {props.size}</h6>
                <p className="border-top border-secondary pt-3 mt-3">
                    <strong>$ {props.price}</strong>

                </p>
                <button
                    onClick={() => { props.onAddToCart() }}
                    className="btn btn-dark btn-lg btn-block rounded-0">Add to cart</button>
            </div>
        </div>
    )
}

Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
    isFreeShipping: PropTypes.bool,
    imgLink: PropTypes.string,
    onAddToCart: PropTypes.func
}

export default Product


