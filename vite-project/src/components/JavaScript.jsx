import React from 'react'


//기본 데이터 선언
const text = "Hello, world!"
const num  = 15;
const obj = {name : "최지원", age: 20, gender: "M"};
const arr =[1,2,3];
const arr2 = [];

for (let i=0; i < arr.length; i++){
    arr2.push(<h4 key={i}>{arr[i]}</h4>)
}

const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_h4OecV4ixsFbIcP2HSBde0eYV4APA55lvVOx4oAkg&s"

function getGreeting(){
    return "안녕하세요. react!"
}

const JavaScript = () => {
  return (
    <div>
        <h2>변수 넣기</h2>
        <ul>
            <li>{text}</li> {/*변수 그대로 넣기 */}
            <li>{text + " test"}</li>
        </ul>
        <h2>숫자 및 계산식 넣기</h2>
        <ul>
            <li>{num}</li>
            <li>{num + 15}</li>
        </ul>
        <h2>Boolean, Nullish 값 넣기</h2>
        <ul>
            <li>{true}</li>
            <li>{false}</li>
            <li>{undefined}</li>
            <li>{null}</li>
        </ul>
        <h2>Obejct, Array 넣기</h2>
        <ul>
            {Object.keys(obj).map((key) => (
                <li key={key}>
                    {key} : {obj[key]}
                </li>
            ))}
            <li>{arr}</li>
            <li>
                {[<div key="1">111</div>,<div key="2">222</div>]}
            </li>
        </ul>
        <h2>조건부 렌더링</h2>
        <ul>
            <li>{
                num > 10 ? 
                <span>10보다 큼</span> : 
                <span>10보다 작음</span>
                }
            </li>
        </ul>
        <h2>함수 호출</h2>
        <ul>
            <li>{getGreeting()}</li>
        </ul>
        <h2>배열을 이용한 동적 리스트</h2>
        <ul>
            {/* 배열을 map으로 돌며 동적으로 목록 생성 */}
            {arr.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <h2>조건문과 연산자 사용</h2>
        <ul>
            <h3>삼항 연산자</h3>
            <li>{1+1 === 2 ? "참입니다." : "거짓입니다."}</li>

            <h3>AND 연산자</h3>
            <li>{1+1 === 2 && "AND 연산자1"}</li>
            <li>{1+1 !== 2 && "AND 연산자2"}</li>
            <li>{arr.length && "AND 연산자3"}</li> {/*배열의 길이가 0이 아니면 출력 */}

            <h3>OR 연산자</h3>
            <li>{1+1 !== 2 || "OR 연산자1"}</li>
            <li>{text || "OR 연산자2"}</li> {/* text가 falsy이면 OR연산자2 출력 */}
        </ul>
        <h2>IF문(즉시실행함수)</h2>
        <ul>
            <li>{(()=> {
                    if (1+1 === 2) 
                        return "IF";
                    eles
                        return "ELSE";
                })()}
            </li>
        </ul>
    </div>
  )
}

export default JavaScript