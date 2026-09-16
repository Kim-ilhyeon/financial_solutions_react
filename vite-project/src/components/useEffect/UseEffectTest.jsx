import React, { useEffect, useState } from 'react'

/*
    useEffect 정리
    - 컴포넌트 랜더링 이후 특정 작업을 수행
    - 클래스형 컴포넌트의 생명주기 메소드를 대체한다. (DidMount, DidUpdate, WillUnMount)

    [사용법]
    useEffect(effectFunc, [deps])
*/

const UseEffectTest = () => {
    const [name, setName] = useState("홍길동");
    const [num, setNum] = useState(0);

    const handleChangeName = (ev) => {
        setName(ev.target.value);
    }

    const handleClickNum = () => {
        setNum(prev => prev + 1);
    }

    // 1. 의존성 배열이 없을 때
    useEffect(() => {
        console.log("[1] 의존성 없음 : 모든 랜더링마다 실행됨")
    });

    // 2. 빈 의존성 배열을 넣었을 때
    useEffect(() => {
        console.log("[2] 빈 의존성 배열 : 처음 랜더링될 때만 실행됨 (컴포넌트가 처음 생성될때 1회 = DidMount시점)")
    }, []);

    // 3. name값이 의존성 배열에 있을 때
    useEffect(() => {
        console.log(`[3] name 의존성 배열 : ${name}`)
    }, [name]);

    // 4. 클린업 함수 (return)
    useEffect(() => {
        return () => {
            console.log(`[4] 클린업 함수 : ${name}이 변경될 때 이전 값을 정리하거나 UnMount 시 실행됨.`);
        }
    }, [name]);

  return (
    <div>
        <h2>UseEffect 테스트</h2>
        <p>안녕하세요. <strong>{name}</strong>입니다.</p>

        <input 
            type="text"
            value={name}
            placeholder='이름...'
            onChange={handleChangeName}
        />

        <p>버튼을 <strong>{num}</strong>번 클릭했습니다.</p>
        <button onClick={handleClickNum}>+1 증가</button>
    </div>
  )
}

export default UseEffectTest