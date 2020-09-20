import React from 'react'
import PropTypes from 'prop-types'

class IncreaseItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={this.handleClick}
            > + </button>
        )
    }

    handleClick() {
        this.props.onIncreaseItem();
    }



}

IncreaseItem.propTypes = {
    id: PropTypes.number,
    quantity: PropTypes.number,
    onIncreaseItem: PropTypes.func
}

export default IncreaseItem

