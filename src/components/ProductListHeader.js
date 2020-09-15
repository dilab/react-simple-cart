import React from 'react'
import PropTypes from 'prop-types'

function ProductListHeader(props) {
    return (
        <p>{props.productsCount} Product(s) found</p>
    )
}

ProductListHeader.propTypes = {
    productsCount: PropTypes.number
}

export default ProductListHeader

