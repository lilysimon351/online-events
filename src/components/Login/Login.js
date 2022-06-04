import { useAuthRoute } from "../../context/RouteProvider"
import {ACTIVE_ROUTES} from '../../helpers/constants'
import {useForm} from 'react-hook-form'
import classes from './Login.module.css'
import { useState } from "react"
import axios from "axios"
import {baseUrl} from '../../API/Api.js'
import { useNavigate } from "react-router-dom"
import { useUserInfo } from "../../context/UserProvider"
import { useTranslate } from "../../context/LanguageProvider";
import { LANGUAGES } from "../../helpers/constants";
import {HEADER_LINKS} from "../../helpers/constants"

const [,REGISTRATION] = ACTIVE_ROUTES

const Login = () => {
  const {t, changeLanguage} = useTranslate()

    const navigate = useNavigate()
    const {setActiveRoute} = useAuthRoute()
    const {register,handleSubmit,formState:{errors}} = useForm()
    const [isAuthFailed,setIsAuthFailed] = useState(false)
    const {setUser} = useUserInfo()

    const onSubmit = data=>{
      axios.get(`${baseUrl}/users`)
      .then(res =>{
        const user = res.data.find(user =>user.username === data.login && user.password ===data.password)
        if(user){
          setUser(user)
            navigate('../home')
        }
        else {
          setIsAuthFailed(true)
          console.error('USER is not found')
        }
      })
    }

  return (
    <div className={classes.div}>
      <form  className={classes.form}
       onSubmit={handleSubmit(onSubmit)}>
        <label className={classes.label}>
          {t('LOGIN')}
          <input {...register('login')} type='text'/>
        </label>
        <label className={classes.label}>
          {t('PASSWORD')}
          <input {...register('password')} type='password'/>
        </label>
        <button className={classes.button} type="submit">LOG IN</button>
      </form>
      {isAuthFailed &&  <button onClick={() => setActiveRoute(REGISTRATION)}>Go to Registration</button>}
     
    </div>
  )
}

export default Login
