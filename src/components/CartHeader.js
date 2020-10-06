import React from 'react'
import PropTypes from 'prop-types'

function CartHeader(props) {
    return (
        <div class="sticky-top bg-dark">
            <div class="container p-3">
                <div class="row">
                    <div class="col text-center text-white">
                        <h3 onClick={() => {
                            props.onClickHeader();
                        }}>
                            Cart <span className="badge badge-warning rounded-pill">{props.productsCount}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

CartHeader.propTypes = {
    productsCount: PropTypes.number,
    onClickHeader: PropTypes.func,
}

export default CartHeader

