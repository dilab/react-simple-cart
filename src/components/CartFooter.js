import React from 'react'
import PropTypes from 'prop-types'

function CartFooter(props) {
    return (
        <div className="row border-top border-1 pt-3">
            <div className="col text-left">
                SUBTOTAL
            </div>
            <div className="col text-right">
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

