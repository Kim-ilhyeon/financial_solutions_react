import React, { useState } from 'react'
import Toolbar from './Toolbar'
/*
    여러 컴포넌트에서 사용하는 데이터를 상위 컴포넌트에 state저장하고
    이를 props로 하위 컴포넌트에 전달한다.
    state변경함수는 상위 컴포넌트에서 정의하고, 하위 컴포넌트에서 setState를 호출하지 않도록 한다.
*/
const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onLogin = () => {
    setIsLogin(true)
  }
  const onLogout = () => {
    setIsLogin(fasle)
  }

  return (
    <div>
        <h1 style={{padding: 24}}>Q강의장 친구들</h1>
        <Toolbar 
          isLogin={isLogin}
          onLogin={onLogin}
          onLogout={onLogout}
        />
    </div>
  )
}

export default LandingPage