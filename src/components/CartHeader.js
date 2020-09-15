import React from 'react'
import PropTypes from 'prop-types'

function CartHeader(props) {
    return (
        <h3>
            Cart <span class="badge badge-warning rounded-pill">4</span>
        </h3>
    )
}

CartHeader.propTypes = {

}

export default CartHeader

