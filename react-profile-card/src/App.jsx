import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'

const datas = [
  {
    id: 1,
    name: "김일현",
    age: 26,
    isOnline: true,
  },
  {
    id: 2,
    name: "김이현",
    age: 12,
    isOnline: false,
  },
  {
    id: 3,
    name: "김삼현",
    age: 23,
    isOnline: true,
  },
  {
    id: 4,
    name: "김사현",
    age: 14,
    isOnline: true,
  },
  {
    id: 5,
    name: "김오현",
    age: 25,
    isOnline: true,
  },
  {
    id: 6,
    name: "김팔현",
    age: 18,
    isOnline: false,
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Profile Card</h3>
      <ProfileCard datas={datas} />
    </>
  )
}

export default App
