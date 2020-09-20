import React from 'react'
import PropTypes from 'prop-types'

function IncreaseItem(props) {
    return (
        <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={props.onIncreaseItem}
        > + </button>
    )
}

IncreaseItem.propTypes = {
    onIncreaseItem: PropTypes.func
}

export default IncreaseItem

