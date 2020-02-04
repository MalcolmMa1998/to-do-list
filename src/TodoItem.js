import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
        )
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'Hello World',
}

export default TodoItem;