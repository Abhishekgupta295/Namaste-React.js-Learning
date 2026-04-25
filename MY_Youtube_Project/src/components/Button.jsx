import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='bg-gray-300 p-2 m-2 rounded-lg text-black'>{props.name}</button>
    </div>
  )
}

export default Button