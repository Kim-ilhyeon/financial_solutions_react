import React, { useState } from 'react'

/*
    state : 컴포넌트의 상태값
    useState : 컴포넌트의 상태를 생성하고, 관리할 수 있게 해주는 react 기본 hook
    -> 컴포넌트는 state값이 변경되면 이를 확인하고 컴포넌트를 리랜더링 한다.

    [사용법]
    const [변수명, set변수명] = useState(초기값);
    변수명 : 생성한 state의 변수
    set변수명 : 생성한 state를 변경하는 함수
*/
const UseStateTest = () => {
    const [num, setNum] = useState(0);
    
    const increase = () => {
        setNum(prevNum => prevNum + 1)
        setNum(prevNum => {
            console.log("이전 상태값 : ", prevNum)
            return prevNum + 1
        })
        setNum(num + 1);
        console.log(num)

        // 상태가 이전 상태에 의존하는 경우에는 .. 항상 상태 업데이트 함수에 콜백을 사용하는 방식을 사용하는 것이 안전하다.
    }

    const decrease = () => {
        setNum(num - 1);
        console.log(num)
    }

  return (
    <div>
        <span>count : {num}</span>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
  )
}

export default UseStateTest