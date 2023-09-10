import React from 'react'
import logo from "../../assets/img/HeroBannerimg.png"
import Header from '../../components/Header'

function MainPage() {
  return (
    <div className='main'>
        <Header/>
        <img style={{width:500, height:600, objectFit:"contain", marginLeft:"50px"}} src={logo}/>
    </div>
  )
}

export default MainPage