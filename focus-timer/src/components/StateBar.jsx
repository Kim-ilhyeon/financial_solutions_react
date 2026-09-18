import React from 'react'
import styled from 'styled-components'
import { isToday } from '../utils/format';

const Bar = styled.div`
  padding: 12px 16px;
  background: #fff;
  border: 1px solid #d0d0d0;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  
`

const StateBar = ({sessions}) => {
  const today = sessions.filter(s => isToday(s.endedAt));

  const totalMinutes = today.reduce((sum, s) => sum + s.minutes , 0);

  return (
    <Bar>
      오늘 {today.length}회 · 총 {totalMinutes}분
    </Bar>
  )
}

export default StateBar