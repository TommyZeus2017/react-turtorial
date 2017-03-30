/**
 * Created by Tommy on 3/31/2017.
 */
import React from 'react'

class LifeCycle extends React.Component {

    // 생성자 메소드로서 컴포넌트가 처음 만들어 질 때 실행됩니다.
    // 이 메소드에서 기본 state 를 정할 수 있습니다.
    constructor(props){
        super(props);
        console.log("constructor");
    }

    // 컴포넌트가 DOM 위에 만들어지기 전에 실행됩니다.
    componentWillMount(){
        console.log("componentWillMount");
    }

    // 컴포넌트 렌더링을 담당합니다.
    render() {
        return(
            <h3>I am testing lifecycle of component</h3>
        );
    }

    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
    // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
    // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

    componentDidMount(){
        console.log("componentDidMount");
    }

    // 컴포넌트가 prop 을 새로 받았을 때 실행됩니다.
    // prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용합니다.
    // 이 안에서 this.setState() 를 해도 추가적으로 렌더링하지 않습니다.
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
    }

    // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
    // 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
    // 예: return nextProps.id !== this.props.id;
    // JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }

    // 컴포넌트가 업데이트 되기 전에 실행됩니다.
    // 이 메소드 안에서는 this.setState() 를 사용하지 마세요 – 무한루프에 빠져들게 됩니다.
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    }

    // 컴포넌트가 리렌더링을 마친 후 실행됩니다.
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
    }

    // 컴포넌트가 DOM 에서 사라진 후 실행되는 메소드입니다.
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

}