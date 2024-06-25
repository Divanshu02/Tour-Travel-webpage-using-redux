import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const count=useSelector(state=>state.value)
  return (
    <div style={{backgroundColor:'rgb(247, 233, 216)',textAlign:'right',paddingRight:'20rem',paddingTop:'1rem'}}>
        <button className='hdr-btn' style={{padding:'.5em',borderRadius:'1em',fontSize:'1em',cursor:'pointer'}}>Liked Items {count}</button>
    </div>
  )
}

export default Header
