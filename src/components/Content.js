/**
 * Created by Tommy on 3/31/2017.
 */
import React from 'react';
import Contacts from './contact/Contacts';

class Content extends React.Component {
    render(){
        return (
            <div>
                <h2> { this.props.title }</h2>
                <p>{ this.props.body }</p>
                <Contacts/>
            </div>
        );
    }
}

Content.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string.isRequired
};

export default Content;
