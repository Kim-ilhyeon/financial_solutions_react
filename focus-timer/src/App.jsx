import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components';
import SettingsPanel from './components/SettingsPanel'
import TimerPanel from './components/TimerPanel';
import StateBar from './components/StateBar';
import SessionList from './components/SessionList';

const STORAGE_KEY = "focus-sessions";

const Container = styled.main`
  max-width: 600px;
  margin: 40px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  margin: 0;
  font-size: 22px;
`

// const sessions = [
//   {
//     id: 1726460400000,          // Date.now()
//     label: 'React 과제',         // 사용자 입력, 비어 있으면 '(제목 없음)'
//     minutes: 25,                // 설정된 집중 시간
//     startedAt: '2026-09-16T05:00:00.000Z', // ▶ 를 처음 누른 시각 (ISO)
//     endedAt:   '2026-09-16T05:25:00.000Z', // 0초 도달 시각 (ISO)
//   },
//   {
//     id: 1726460400000,          // Date.now()
//     label: 'React 과제',         // 사용자 입력, 비어 있으면 '(제목 없음)'
//     minutes: 25,                // 설정된 집중 시간
//     startedAt: '2026-09-17T05:00:00.000Z', // ▶ 를 처음 누른 시각 (ISO)
//     endedAt:   '2026-09-17T05:25:00.000Z', // 0초 도달 시각 (ISO)
//   },
//   {
//     id: 1726460400000,          // Date.now()
//     label: 'React 과제',         // 사용자 입력, 비어 있으면 '(제목 없음)'
//     minutes: 25,                // 설정된 집중 시간
//     startedAt: '2026-09-18T05:00:00.000Z', // ▶ 를 처음 누른 시각 (ISO)
//     endedAt:   '2026-09-18T05:25:00.000Z', // 0초 도달 시각 (ISO)
//   },
// ];


function App() {
  const [sessions, setSessions] = useState(() => {
    const storageSession = localStorage.getItem(STORAGE_KEY);
    return storageSession ? JSON.parse(storageSession) : [];
  });

  const [focusMinutes, setFocusMinutes] = useState(25);
  // 타이머가 시작했는지 멈췄는지 확인용 변수
  const [isRunning, setIsRunning] = useState(false);

  const toggleRunning = () => setIsRunning(prev => !prev);

  const changeFocusMinutes = (minutes) => {
    // 원래는 뭔가 검증처리를 해야 한다.
    setFocusMinutes(Number(minutes));
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  }, [sessions]);

  const addSession = (session) => {
    setSessions(prev => [...prev, session]);
    setIsRunning(false);
  }

  return (
    <Container>
      <Header>
        <Title>🎯 Focus Timer</Title>
        <SettingsPanel focusMinutes={focusMinutes} changeFocusMinutes={changeFocusMinutes} isRunning={isRunning} />
      </Header>

      <TimerPanel focusMinutes={focusMinutes} isRunning={isRunning} onToggle={toggleRunning} addSession={addSession}>

      </TimerPanel>

      <StateBar sessions={sessions}>

      </StateBar>

      <SessionList sessions={sessions}>

      </SessionList>
    </Container>
  )
}

export default App
