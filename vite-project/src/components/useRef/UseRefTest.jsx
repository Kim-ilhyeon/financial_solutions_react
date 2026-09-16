import React, { useEffect, useRef, useState } from 'react'

/*
    useRef는 React에서 Dom요소에 직접 접근하거나 컴포넌트 랜더링 간 상태변화 없이 값을 저장하는데 사용된다.
    state와 다르게 값이 변경되어도 컴포넌트가 리랜더링 되지 않고, 리랜더링 시에도 값이 초기화 되지 않고 참조값을 유지한다.
*/

const UseRefTest = () => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("M");

    const useInput = useRef(null);  // useRef를 이용해서 input요소를 참조

    const handleChangeName = (ev) => {
        setName(ev.target.value);
    }
    
    const handleChangeGender = (ev) => {
        setGender(ev.target.value);
    }

    const handleSubmit = (ev) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        ev.preventDefault();
    }

    const handleReset = () => {
        setName("");
        setGender("M");
    }

    useEffect(() => {
        useInput.current?.focus()
    }, [name, gender])

  return (
    <>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input 
                    type="text" 
                    value={name} 
                    onChange={handleChangeName} 
                    ref={useInput}  // useRef로 포커스를 설정할 input요소에 참조를 연결
                />
            </label>
            <label>
                성별 : 
                <select value={gender} onChange={handleChangeGender}>
                    <option value="M">남자</option>
                    <option value="F">여자</option>
                </select>
            </label>
            <br /><br />
            <button type='submit'>제출</button>
            &nbsp;
            <button type='button' onClick={handleReset}>초기화</button>
        </form>
    </>
)
}

export default UseRefTest