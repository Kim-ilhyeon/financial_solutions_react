import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import UseStateTest from './components/useState/UseStateTest'
import LandingPage from './components/useState/LandingPage'
import SignUp from './components/useState/SignUp'
import UseRefTest from './components/useRef/UseRefTest'
import UseRefScroll from './components/useRef/UseRefScroll'
import UseMemoTest from './components/useMemo/UseMemoTest'
import UseEffectTest from './components/useEffect/UseEffectTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyComponent message={"함수형 컴포넌트 입니디."} /> */}
      {/* <UseStateTest /> */}
      {/* <LandingPage /> */}
      {/* <SignUp /> */}
      {/* <UseRefTest /> */}
      {/* <UseRefScroll /> */}
      {/* <UseMemoTest /> */}
      <UseEffectTest />
    </>
  )
}

export default App
