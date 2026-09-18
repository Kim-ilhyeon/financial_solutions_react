import React from 'react'
import styled from 'styled-components'
import SessionItem from './SessionItem'

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const SessionList = ({sessions}) => {
  return (
    <List>
        {sessions.map(session => (
            <SessionItem key={session.id} session={session} />
        ))}
    </List>
  )
}

export default SessionList