import React from 'react'
import PropTypes from 'prop-types'
import DecreaseItem from './DecreaseItem'
import IncreaseItem from './IncreaseItem'
import DeleteItem from './DeleteItem'

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        }

        this.handleDecreaseItem = this.handleDecreaseItem.bind(this);
        this.handleIncreaseItem = this.handleIncreaseItem.bind(this);
    }


    render() {
        const { quantity } = this.state;
        return (
            <div className="row border-top border-1" >

                <div className="col p-2">
                    <img src={this.props.imgLink} className="float-left mr-2" alt={this.props.name} />
                    <h5 className="card-title mt-5">{this.props.name}</h5>
                    <ul className="list-unstyled">
                        <li>Size: {this.props.size}</li>
                        <li>Quantity: {quantity}</li>
                    </ul>
                </div>
                <div className="col-md-2 text-right">

                    <DeleteItem id={this.props.id} />

                    <h4 className="mt-5 pb-3 pt-3">
                        ${this.props.price}
                    </h4>

                    <div className="btn-group" role="group">
                        <DecreaseItem
                            id={this.props.id}
                            quantity={this.state.quantity}
                            onDecreaseItem={this.handleDecreaseItem} />
                        <IncreaseItem
                            id={this.props.id}
                            quantity={this.state.quantity}
                            onIncreaseItem={this.handleIncreaseItem}
                        />
                    </div>

                </div>
            </div>
        );
    }

    handleDecreaseItem() {
        this.setState((state) => {
            return {
                quantity: (state.quantity !== 0 ? state.quantity - 1 : 0)
            }
        })
    }

    handleIncreaseItem() {
        this.setState(state => {
            return {
                quantity: state.quantity + 1
            }
        })
    }
}

CartItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
    imgLink: PropTypes.string
}

export default CartItem

