import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list=["All","Cricket","Movies","Music","Popular","Trending","News","Live","Trolls","New","Bikes", "Gaming"]
  return (
    <div className='flex'>
     {list.map((index)=>{
      return <Button key={index} name={index}/>
     })}
    </div>
  )
}

export default ButtonList
