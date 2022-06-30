import { Component } from "react";

class MyComponentClass extends Component {
    render(){
        const { name, age, children} = this.props;
        return(
            <div>
                제 이름은 {name}입니다.
                나이는 {age}입니다.
                {children}입니다.
            </div>
        );
    };
}
MyComponentClass.defaultProps = {
    name: '기본이름',
    age: 20,
    children: 'aaa',
}
export default MyComponentClass;