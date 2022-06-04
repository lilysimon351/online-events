import {ACTIVE_ROUTES} from '../../helpers/constants'
import { useForm } from 'react-hook-form'
import classes from './Login.module.css'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { setAuthRoute } from "../../features/authTab/authTabSlice"
import { logInUser, selectAllUsers, selectIsAdmin } from "../../features/user/userSlice"
import { useState } from 'react';
import { useTranslate } from "../../context/LanguageProvider";
import { LANGUAGES } from "../../helpers/constants";

const [,REGISTRATION] = ACTIVE_ROUTES

const Login = () => {
  
  const {t, changeLanguage} = useTranslate()

	const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm()

	const [ loginFailed, setLoginFailed] = useState(false)
	const allUsers = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onSubmit = data => {
		const user = allUsers.find( item => item.username === data.login && item.password === data.password)
		if( user ) {
			dispatch(logInUser(user))
			
			if( localStorage.getItem('isAdmin') ) {
				navigate('/admin')
			} else {
				navigate('/')
			}
		} else {
			setLoginFailed(true)
		}
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
        {/* <label>
          <input type='checkbox'{...register('save')}/>
          Remember Me
        </label> */}
        <button className={classes.button} type="submit">{t('LOG IN')}</button>
      </form>
	  
      { loginFailed &&  (
		  <>
			<p style={{color: 'red'}}>Username or password is wrong</p>
	  		<button onClick={() => dispatch(setAuthRoute(REGISTRATION))}>Go to Registration</button>
		  </>
	  ) }
     
    </div>
  )
}

export default Login
