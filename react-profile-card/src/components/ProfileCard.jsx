import React from 'react'
import './ProfileCard.css'
import styled from 'styled-components'

const ProfileCardLi = styled.li`
  width: 200px;
  padding: 20px;

  border: 1px solid #ddd;
  border-radius: 12px;

  text-align: center;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`
// 아래와 같이 이전 이미 디자인되어있는 것 기준으로 추가로 css를 원하는 경우 아래처럼 사용
// const NewProfileCardLi = styled(ProfileCardLi)`
//   css...
// `

const Online = styled.h3`
  color: green;
  font-weight: bold;
`

const Offline = styled.h3`
  color: gray;
  font-weight: bold;
`

const ProfileCard = ({datas}) => {
  return (
    <>
      <div className='profile-container'>
          <ul className='profile-list'>
              {datas.map((data, id) => (
                  <ProfileCardLi key={data.id}>
                    <h2>{data.name}</h2>
                    <h3>{data.age}세</h3>
                    {data.isOnline ? 
                      <Online >온라인</Online> : 
                      <Offline >오프라인</Offline>}
                  </ProfileCardLi>
              ))}
          </ul>
      </div>
    </>
  )
}

export default ProfileCard