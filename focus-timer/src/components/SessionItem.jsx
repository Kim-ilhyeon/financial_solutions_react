import React from 'react'
import styled from 'styled-components'
import { formatClock } from '../utils/format'

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
`
const Clock = styled.span`
  color: #474747;
  font-variant-numeric: tabular-nums;
`

const Label = styled.span`
  flex: 1;
`

const Minutes = styled.span`
  color: #008000;
  font-weight: 600;
`

const SessionItem = ({session}) => {
  return (
    <Item>
      <Clock>{formatClock(session.startedAt)}</Clock>
      <Label>{session.label}</Label>
      <Minutes>{session.minutes}분</Minutes>
    </Item>
  )
}

export default SessionItem