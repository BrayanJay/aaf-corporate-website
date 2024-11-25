import React from 'react'
import mainImg from '../../assets/careers.png'

const Banner = () => {
  return (
    <div className="relative flex-col justify-center">
        <div className="">
            <img className="w-screen rounded-bl-3xl rounded-br-3xl shadow" src={mainImg}></img>
        </div>
</div>
  )
}

export default Banner