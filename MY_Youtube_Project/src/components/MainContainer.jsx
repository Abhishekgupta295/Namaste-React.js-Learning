import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-11 bg-orange-400 ml-20'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer