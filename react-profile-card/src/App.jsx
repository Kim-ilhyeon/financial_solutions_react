import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'

const datas = [
  {
    name: "김일현",
    age: 26,
    isOnline: true,
  },
  {
    name: "김이현",
    age: 12,
    isOnline: false,
  },
  {
    name: "김삼현",
    age: 23,
    isOnline: true,
  },
  {
    name: "김사현",
    age: 14,
    isOnline: true,
  },
  {
    name: "김오현",
    age: 25,
    isOnline: true,
  },
  {
    name: "김팔현",
    age: 18,
    isOnline: false,
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard datas={datas} />
    </>
  )
}

export default App
