import React from 'react'
import PropTypes from 'prop-types'

class FilterOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = { initialState: this.props.selected };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <>
                <button
                    type="button"
                    className={'btn mb-3 rounded-pill mr-1 ' + this.getBtnType()}
                    onClick={this.handleClick}
                >
                    {this.props.value}
                </button>
            </>
        )
    }

    getBtnType() {
        return this.state.initialState ? 'btn-secondary' : 'btn-primary';
    }

    handleClick() {
        this.setState(state => {
            return { initialState: !state.initialState }
        });

        // alert('clicked ' + this.props.value);
    }

}

FilterOption.propTypes = {
    selected: PropTypes.bool,
    value: PropTypes.string,
}

export default FilterOption
