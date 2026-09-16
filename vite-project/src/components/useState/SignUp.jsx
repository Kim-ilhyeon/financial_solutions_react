import React, { useState } from 'react'

// 제출 버튼 클릭 시 alert를 활용해서 이름과 성별을 보여주는 팝업을 나타내자.
const SignUp = () => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("M");

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

  return (
    <>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={name} onChange={handleChangeName} />
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
        </form>
    </>
)
}

export default SignUp