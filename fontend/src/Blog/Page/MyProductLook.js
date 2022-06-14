// component
import BannerLook from '../Components/MyProductHeader/BannerLook'
import PersonalInfoLook from '../Components/MyProductHeader/PersonalInfoLook'
import LoginNav from '../../Home/Components/LoginNav/LoginNav'
import MyProductLook from '../../Home/Pages/MyProduct/MyProductLook'

const MyProductHeader = () => {
  let now = localStorage.getItem('auth')
  return (
    <>
      <LoginNav />
      <BannerLook />
      <PersonalInfoLook />
      <MyProductLook />
    </>
  )
}

export default MyProductHeader
