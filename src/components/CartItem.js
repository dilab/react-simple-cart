import React from 'react'
import PropTypes from 'prop-types'
import DecreaseItem from './DecreaseItem'
import IncreaseItem from './IncreaseItem'
import DeleteItem from './DeleteItem'

function CartItem(props) {
    return (
        <div className="row border-top border-1">

            <div className="col p-2">
                <img src={props.imgLink} className="float-left mr-2" alt={props.name} />
                <h5 className="card-title mt-5">{props.name}</h5>
                <ul className="list-unstyled">
                    <li>Size: {props.size}</li>
                    <li>Quantity: {props.quantity}</li>
                </ul>
            </div>
            <div className="col-md-2 text-right">

                <DeleteItem />

                <h4 className="mt-5 pb-3 pt-3">
                    ${props.price}
                </h4>

                <div className="btn-group" role="group">
                    <DecreaseItem />
                    <IncreaseItem />
                </div>

            </div>
        </div>
    )
}

CartItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
    quantity: PropTypes.number,
    imgLink: PropTypes.string
}

export default CartItem

