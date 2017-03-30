/**
 * Created by Tommy on 3/31/2017.
 */
import React from 'react';

class ContactInfo extends React.Component {
    render() {
        return(
            <li>{this.props.name} {this.props.phone}</li>
        )
    }
}

export default ContactInfo;