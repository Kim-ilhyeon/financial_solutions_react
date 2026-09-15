import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import World from './components/World'
import VideoCard from './components/VideoCard'
import VideoList from './components/VideoList'

const videoDatas = [
  {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }, {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }, {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }, {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }, {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }, {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }, {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }, {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }, {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  },{
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }, {
    sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
    title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
    channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
    channelName: "빵빵이의 일상",
    views: "146.3만회",
    date: "2시간 전",
  }
]


function App() {

  return (
    <>
      {/* <Hello />
      <World /> */}
      {/* <VideoCard video={{
          sumbnail: "https://i.ytimg.com/vi/PirdZt0s0TI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIlRN8TJ8s5vQ6xslGAuxc4W4k6g",
          title: "빵빵이와 옥지의 반전드라마: 미래를 찍는 카메라",
          channelLogo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
          channelName: "빵빵이의 일상",
          views: "146.3만회",
          date: "2시간 전",
      }} count = {10}/> */}
      <VideoList videos={videoDatas} />
    </>
  )
}

export default App
