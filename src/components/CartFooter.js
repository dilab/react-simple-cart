import React from 'react'
import PropTypes from 'prop-types'

function CartFooter(props) {
    return (
        <div class="row border-top border-1 pt-3">
            <div class="col text-left">
                SUBTOTAL
            </div>
            <div class="col text-right">
                <h3>
                    ${props.total}
                </h3>
            </div>
        </div>
    )
}

CartFooter.propTypes = {
    total: PropTypes.number
}

export default CartFooter

