import React from 'react'
import PropTypes from 'prop-types'

class IncreaseItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initialQty: this.props.quantity
        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={this.handleClick}
            > + ({this.state.initialQty})</button>
        )
    }

    handleClick() {
        this.setState(state => {
            return {
                initialQty: state.initialQty + 1
            }
        })
    }



}

IncreaseItem.propTypes = {
    id: PropTypes.number,
    quantity: PropTypes.number
}

export default IncreaseItem

