import React from 'react'
import PropTypes from 'prop-types'

function CartHeader(props) {
    return (
        <h3>
            Cart <span className="badge badge-warning rounded-pill">{props.productsCount}</span>
        </h3>
    )
}

CartHeader.propTypes = {
    productsCount: PropTypes.number
}

export default CartHeader

