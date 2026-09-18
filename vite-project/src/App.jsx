import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

/*
  BrowserRouter : 라우터의 최상위 컴포넌트 (html의 history api를 활용해서 url을 변경해주는 역할)
  Routes : 현재 브라우저 주소창의 URL과 가장 일치하는 하위 route를 찾아서 렌더링하는 역할
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav style={{marginBottom: 20}}>
        <Link style={{margin: 10}} to="/">홈</Link>
        <Link style={{margin: 10}} to="/about">소개</Link>
        <Link style={{margin: 10}} to="/profile/김개똥">프로필</Link>
      </nav>
      {/* Route 설정 */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
