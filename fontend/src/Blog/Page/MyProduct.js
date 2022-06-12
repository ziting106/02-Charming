import style from './MyProduct.module.css'
import Banner from '../Components/MyProductHeader/Banner'
import PersonalInfo from '../Components/MyProductHeader/PersonalInfo'
import UnloginNav from '../../Home/Components/UnloginNav/UnloginNav'
import LoginNav from '../../Home/Components/LoginNav/LoginNav'

const MyProductHeader = () => {
  let now = localStorage.getItem('auth')
  return (
    <>
      {now == 'true' ? <LoginNav /> : <UnloginNav />}
      <Banner className={style.banner} />
      <PersonalInfo />
    </>
  )
}

export default MyProductHeader
