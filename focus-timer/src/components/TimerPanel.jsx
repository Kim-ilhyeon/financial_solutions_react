import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { formatTime } from '../utils/format'

const Panel = styled.section`
  background: #fff;
  border: 1px solid #d0d0d0;
  border-radius: 12px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const Input = styled.input`
  font-size: 15px;
  width: 100%;
  max-width: 350px;
  padding: 8px 12px;
  border: 1px solid #d0d0d0;
  text-align: center;
`

const Time = styled.div`
  font-size: 72px;
  font-weight: 700;
  color: #343434;
  font-variant-numeric: tabular-nums;   // 숫자 폭을 동일하게 고전 폭으로 가져가게 됨.
`

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background: ${({$running}) => {$running ? '#ff0000' : '#008000'}};
`

const TimerPanel = ({focusMinutes, onToggle, isRunning, addSession}) => {
  const [secondsLeft, setSecondLeft] = useState(focusMinutes * 60);

  const startedAtRef = useRef(null);  // 시작시간 값 보관용
  const labelInputRef = useRef(null); // DOM접근용 ->입력창 포커스

  useEffect(() => {
    if (!isRunning) labelInputRef.current.focus();
  }, [isRunning]);

  const [label, setLabel] = useState('');

  useEffect(() => {
    setSecondLeft(focusMinutes * 60);
    startedAtRef.current = null;
  }, [focusMinutes]);

  // 실행 중일때만 1초씩 감소
  useEffect(() => {
   if (!isRunning) return;

   const timeInter = setInterval(() => {
    setSecondLeft(prev => prev - 1);
   }, 1000)

   return () => clearInterval(timeInter);
  }, [isRunning]);

  // 0초가 되면 세션 기록하고 초기화
  useEffect(() => {
    // 해당 useEffect가 실행되면 안되는 경우에 조건을 걸어줘서 탈출하게 만들어줘야 함.
    if (secondsLeft !== 0) return;

    addSession({
        id: Date.now(),
        label: label.trim() || '(제목없음)',
        minutes: focusMinutes,
        startedAt: startedAtRef,
        endedAt: new Date().toISOString(),
      });

      startedAtRef.current = null;
      setSecondLeft(focusMinutes * 60);
      setLabel('');
  }, [secondsLeft]);

  useEffect(() => {
    document.title = isRunning ? `${formatTime(secondsLeft)} · ${label || '목표없음'}` : 'Focus Timer';

    return () => {
      document.title = 'Focue Timer';
    }
  }, [isRunning, secondsLeft, label]);

  // space키로 토글, 입력창 포커스 시에는 무시
  useEffect(() => {
    const spaceKeyDown = (ev) => {
      if (ev.code !== 'Space') return;
      if (ev.target.tagName !== "BODY") return;

      // 확산 방지
      ev.preventDefault();

      handleToggle();
    }

    window.addEventListener('keydown', spaceKeyDown);

    return () => window.removeEventListener('keydown', spaceKeyDown);
  }, [isRunning, onToggle]);

  // 시작할 때 시간을 기록, 일시정지 <-> 시작 변경
  const handleToggle = () => {
    // 처음에만 시작시간을 기록하기 위한 조건
    if (!isRunning && startedAtRef.current == null) {
      startedAtRef.current = new Date().toISOString();
    }
    onToggle();
  }
  
  // 초기화 버튼 클릭했을 때
  const handleReset = () => {
    if (isRunning) onToggle();
    startedAtRef.current = null;
    setSecondLeft(focusMinutes * 60);
    setLabel('');
  }

  return (
    <Panel>
      <Time>{formatTime(secondsLeft)}</Time>

      <Input 
        placeholder='무엇에 집중하나요?' 
        value={label} onChange={(e) => setLabel(e.target.value)} 
        disabled={isRunning} 
        ref={labelInputRef}
      />

      <Buttons>
        <Button $running onClick={handleToggle}>
          {isRunning ? ' || 일시정지' :  '▶ 시작'}
        </Button>
        <Button onClick={handleReset}>↺ 초기화</Button>
      </Buttons>
    </Panel>
  )
}

export default TimerPanel