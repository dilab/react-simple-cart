import React from 'react'

function FilterOption(props) {
    return (
        <>
            <button
                type="button"
                className="btn btn-primary mb-3 rounded-pill mr-1"> {props.value} </button>
        </>
    )
}

export default FilterOption
