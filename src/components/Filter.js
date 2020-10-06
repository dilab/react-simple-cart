import React from 'react'
import FilterOption from './FilterOption';
import PropTypes from 'prop-types'

function Filter(props) {

    const optionsContent = props.options.map((option) => {
        return <FilterOption
            checked={option.checked}
            value={option.value}
            key={option.value}
            onToggle={() => { props.onToggle(option.value) }}
        />
    });

    return (
        <>
            <h4>Sizes</h4>
            {optionsContent}
        </>
    )
}


Filter.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onToggle: PropTypes.func
}


export default Filter
