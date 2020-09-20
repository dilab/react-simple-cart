import React from 'react'
import PropTypes from 'prop-types'

function DeleteItem(props) {
    return (
        <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    )
}

DeleteItem.propTypes = {
    id: PropTypes.number
}

export default DeleteItem

