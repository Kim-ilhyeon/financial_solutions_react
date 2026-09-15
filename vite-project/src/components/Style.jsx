import React from 'react'
import "./Style.css"
import styled from 'styled-components'

const roundBoxStyle = {
    position: "absolute",
    top: 50,
    left: 50,
    width: "50%",
    height: "200px",
    padding: 20,
    background: "#2187af",
    borderRadius: 50, // 속성은 camelCase사용
}

const HighlightDiv = styled.div`
    background-color: #ffef3b;
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
`

const RoundBox = styled.div`
    position: absolute;
    top: ${props => props.top || 50}px;
    left: 50px;
    width: 50%;
    width: 50%;
    height: 200px;
    padding: 20;
    background: #2187af;
    border-radius: 50;
`

const Style = () => {
  return (
    <>
        {/* 1. Object로 css작성(inline) */}
        <div 
            style={{
                position: "relative",
                width: 400,
                height: 1500,
                background: "#f1f1f1",
            }}
        >
            {/* 2. CSS-in-JS 사용 : 객체 스타일을 직접 작성 */}
            <div style={roundBoxStyle}>Hello1</div>

            {/* 3. 스타일 객체 재활용 가능 */}
            <div style={{...roundBoxStyle, top: 350}}>
                {/* 4. css파일의 class를 활용 */}
                <div className='highlight'>Hello2</div>
            </div>

            {/* 5.조건적 스타일링 */}
            <div style={{...roundBoxStyle, top: 650}}>
                {/* 삼항연산자 조건부 class렌더링 */}
                <div className={1+1 === 2 ? "highlight" : ""}>Hello3</div>

                {/* AND, OR연산자 조건부 렌더링 */}
                <div className={1+1 === 2 && "highlight"}>Hello3</div>
            </div>

            <RoundBox top={950}>
                <HighlightDiv>
                    stykled-components를 활용한 DIV
                </HighlightDiv>
            </RoundBox>
        </div>
    </>
  )
}

export default Style