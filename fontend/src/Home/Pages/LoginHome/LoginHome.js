import React from 'react'
import Style from './LoginHome.module.css'
// component
import LoginNav from '../../Components/LoginNav/LoginNav'
import UnloginNav from '../../Components/UnloginNav/UnloginNav'
import AsideProductLIst from '../../Components/AsideProductLIst/AsideProductLIst'
import Product from '../../Components/Product/Product'

// react icon
import { AiTwotoneSound } from 'react-icons/ai'

function LoginHome() {
  let now = localStorage.getItem('auth')
  return (
    <header>
      {now == 'true' ? <LoginNav /> : <UnloginNav />}
      {/* <SliderSection/> */}
      <section className={Style.productType}>
        <AsideProductLIst className={Style.displayNone} />
        <Product />
      </section>
    </header>
  )
}

export default LoginHome
