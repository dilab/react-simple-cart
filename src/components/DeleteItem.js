import React from 'react'
import PropTypes from 'prop-types'

function DeleteItem(props) {
    return (
        <button onClick={props.onDeleteItem} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    )
}

DeleteItem.propTypes = {
    onDeleteItem: PropTypes.func
}

export default DeleteItem

