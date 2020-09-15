import React from 'react'
import PropTypes from 'prop-types'

function DeleteItem(props) {
    return (
        <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    )
}

DeleteItem.propTypes = {

}

export default DeleteItem

