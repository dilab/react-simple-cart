import React from 'react'
import PropTypes from 'prop-types'

class IncreaseItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={this.handleClick}
            > + ({this.state.quantity})</button>
        )
    }

    handleClick() {
        this.setState(state => {
            return {
                quantity: state.quantity + 1
            }
        })
    }



}

IncreaseItem.propTypes = {
    id: PropTypes.number
}

export default IncreaseItem

