/**
 * Created by Tommy on 3/31/2017.
 */
import React from 'react';

class ContactRemover extends React.Component {
    handleClick() {
        this.props.onRemove();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                Remove selected contact
            </button>
        );
    }
}

export default ContactRemover;