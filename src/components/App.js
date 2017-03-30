import React from 'react';      // same as 'React = require('react');'

class App extends React.Component {
    sayHey(){
        alert("hey");
    }

    render(){
        let text = "Dev-Server"

        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };

        return (
            <div>
                <h1>Hello React Skeleton</h1>
                <h2>Welcome {text}</h2>
                <button onClick={this.sayHey}>Click Me</button>
                <p style={pStyle}>{1 == 1 ? 'True' : 'False'}{/* This is Comment */}</p>
            </div>
        );
    }
}

export default App;             // same as 'module.export = App'
