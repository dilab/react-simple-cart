import React from 'react'
import PropTypes from 'prop-types'


function DecreaseItem(props) {
    return (
        <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={props.onDecreaseItem}
        > - </button>
    )
}



DecreaseItem.propTypes = {
    id: PropTypes.number,
    onDecreaseItem: PropTypes.func
}

export default DecreaseItem

