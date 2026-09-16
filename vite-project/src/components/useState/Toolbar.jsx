import React from 'react'


/*
    상태를 직접 변경하지 않도록 onLogin, onLogout과 같이 함수를 전달받아 사용한다.
    하위 컴포넌트는 상태값을 읽고, 상태를 변경하는 방법에 대해서는 알 필요가 없다.
*/
const Toolbar = ({isLogin, onLogin, onLogout}) => {
  return (
    <div>
        {isLogin ? (
            <div>
                <div style={{padding: 24}}>안녕하세요 김일현님!!</div>
                <button onClick={onLogout}>로그아웃</button>
            </div>
        ) : (
            <div>
                <div style={{padding: 24}}>로그인이 필요합니다.</div>
                <button onClick={onLogin}>로그인</button>
            </div>
        )}
    </div>
  )
}

export default Toolbar