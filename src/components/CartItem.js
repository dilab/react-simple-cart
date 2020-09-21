import React from 'react'
import PropTypes from 'prop-types'
import DecreaseItem from './DecreaseItem'
import IncreaseItem from './IncreaseItem'
import DeleteItem from './DeleteItem'

class CartItem extends React.Component {


    render() {
        const { quantity } = this.props;

        return (
            <div className="row border-top border-1" >

                <div className="col p-2">
                    <img width={150} src={this.props.imgLink} className="float-left mr-2" alt={this.props.name} />
                    <h5 className="card-title mt-5">{this.props.name}</h5>
                    <ul className="list-unstyled">
                        <li>Size: {this.props.size}</li>
                        <li>Quantity: {quantity}</li>
                    </ul>
                </div>
                <div className="col-md-2 text-right">

                    <DeleteItem onDeleteItem={this.props.onDeleteItem} />

                    <h4 className="mt-5 pb-3 pt-3">
                        ${this.props.price}
                    </h4>

                    <div className="btn-group" role="group">
                        <DecreaseItem
                            id={this.props.id}
                            onDecreaseItem={() => {
                                this.props.onDecreaseItem();
                            }} />
                        <IncreaseItem
                            id={this.props.id}
                            onIncreaseItem={() => {
                                this.props.onIncreaseItem();
                            }}
                        />
                    </div>

                </div>
            </div>
        );
    }

}

CartItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    size: PropTypes.string,
    imgLink: PropTypes.string,
    onDecreaseItem: PropTypes.func,
    onIncreaseItem: PropTypes.func,
    onDeleteItem: PropTypes.func
}

export default CartItem

