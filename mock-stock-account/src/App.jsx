import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { initialStocks, INITIAL_CASH } from './data/stocks'




function App() {
  const [stock, setStock] = useState(initialStocks);
  const [cash, setCash] = useState(INITIAL_CASH);

  handleRenewal = (price) => {
    const rate = 1 + (Math.random() * 4 - 2) / 100;       // 0.98 ~ 1.02
    const nextPrice = Math.round(price * rate / 10) * 10; // 10원 단위로 반올림
    setStock(nextPrice);
  }
  // 종목별로 각각 랜덤값도 다르게 바뀌어야 함

  return (
    <>
      <main>모의 투자 앱</main>
    </>
  );
}

export default App
