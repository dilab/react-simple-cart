import React from 'react'
import FilterOption from './FilterOption';

function Filter(props) {
    const options = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

    const optionsContent = options.map((option) => {
        return <FilterOption value={option} key={option} />
    });

    return (
        <div>
            <h4>Sizes</h4>
            {optionsContent}
        </div>
    )
}

export default Filter
