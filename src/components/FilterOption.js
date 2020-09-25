import React from 'react'
import PropTypes from 'prop-types'

function FilterOption(props) {
    return (
        <>
            <button
                type="button"
                className={'btn btn-sm mb-1 rounded-pill ' + (props.checked ? 'btn-primary' : 'btn-secondary')}
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
