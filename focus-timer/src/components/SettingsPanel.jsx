import React from 'react'
import styled from 'styled-components';


const Select = styled.select`
    padding: 6px 10px;
    border: 1px solid #d0d0d0;
    border-radius: 6px;
    font-size: 14px;
    background: #fff;
`

const OPTIONS = [1, 15, 25, 50];

const SettingsPanel = ({focusMinutes, changeFocusMinutes, isRunning}) => {
  return (
    <Select value={focusMinutes} onChange={(e) => changeFocusMinutes(e.target.value)} disabled={isRunning} >
        {OPTIONS.map((m) => (
            <option key={m} value={m}>
                {m}분
            </option>
        ))}
    </Select>
  )
}

export default SettingsPanel