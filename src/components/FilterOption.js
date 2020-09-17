import React from 'react'

function FilterOption(props) {

    const btnType = props.selected ? 'btn-secondary' : 'btn-primary';

    return (
        <>
            <button
                type="button"
                className={'btn mb-3 rounded-pill mr-1 ' + btnType}> {props.value}
            </button>
        </>
    )
}

export default FilterOption
