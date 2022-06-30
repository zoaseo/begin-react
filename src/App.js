import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import MyComponentClass from './MyComponentClass';
import Counter from './Counter';
import CounterF from './CounterF';
import EventPractice from './EventPractice';
import Counter2 from './Counter2';
import { MyContext } from './component/MyContext';


function App() {
  // const name = "리액트";
  const newtext = "안녕하세요";
  return (
    // * JSX에서 자바스크립트 표현식을 사용하려면 {}로 감싼다.
    // * if문 대신 조건부 연산자 - 삼항연산자를 사용.
    <MyContext.Provider value={newtext}>
    <div className='react'>
    {/* <h1>{name=='리액트' ? (<span>리액트입니다.</span>) : null}</h1>
    <MyComponent name='Green' age='30'><h3>하하하</h3></MyComponent>
    <MyComponent name='Blue' age={50}>새과목</MyComponent> */}
    {/* <MyComponentClass name='classGreen' age={30}>
      <h3>children</h3>
    </MyComponentClass>
    <MyComponentClass></MyComponentClass> */}
    {/* <Counter></Counter> */}
    {/* <CounterF></CounterF> */}
    {/* <EventPractice/> */}
    {/* <MyComponent name='10' age='20'><h2>h2입니다.</h2></MyComponent> */}
    <Counter2/>
    {/* <h2>하이하이</h2>
    <input type="text"></input> */}

    </div>
    </MyContext.Provider>
  );
  // return React.createElement("div", null, "Hello", React.createElement("b",null,"react"))
}

export default App;
