import React from 'react'
import PropTypes from 'prop-types'

class FilterOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = { initialState: this.props.selected };
    }

    render() {
        return (
            <>
                <button
                    type="button"
                    className={'btn mb-3 rounded-pill mr-1 ' + this.getBtnType()}>
                    {this.props.value}
                </button>
            </>
        )
    }

    getBtnType() {
        return this.state.initialState ? 'btn-secondary' : 'btn-primary';
    }

    updateSelection() {
        this.setState((state) => ({
            initialState: !state.initialState
        }));
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.updateSelection(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}

FilterOption.propTypes = {
    selected: PropTypes.bool,
    value: PropTypes.string,
}

export default FilterOption
