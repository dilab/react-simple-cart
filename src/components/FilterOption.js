import React from 'react'
import PropTypes from 'prop-types'

function FilterOption(props) {
    return (
        <>
            <button
                type="button"
                className={'btn btn-sm mr-1 ' + (props.checked ? 'btn-secondary' : 'btn-light')}
                onClick={() => { props.onToggle() }}
            >
                {props.value}
            </button>
        </>
    )
}

FilterOption.propTypes = {
    value: PropTypes.string,
    checked: PropTypes.bool,
    onToggle: PropTypes.func
}

export default FilterOption
