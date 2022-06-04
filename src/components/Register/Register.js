import { useAuthRoute } from '../../context/RouteProvider'
import {ACTIVE_ROUTES} from '../../helpers/constants'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import classes from './Register.module.css'
import { baseUrl } from '../../API/Api'
import axios from 'axios'


const [LOGIN] = ACTIVE_ROUTES

const Register = () => {

    const [isRegisterFailed,setIsRegisterFailed] = useState(true)
    const {setActiveRoute} = useAuthRoute()
    const {register,handleSubmit,formState:{errors}} = useForm()

    const onSubmit = data =>{
      axios.post(`${baseUrl}/users`,{
      name: data.name,
      username: data.login,
      password: data.password,
      mail: data.mail
      })
      setIsRegisterFailed(false)
      setTimeout(()=>{
        setActiveRoute(LOGIN)
      },1000)
    }

    return (
      <div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={classes.label}>
            NAME
            <input {...register('name',{required:true,minLength:4})}  type='text'/>
          </label>
          <label className={classes.label}>
            LOGIN
            <input {...register('login',{required:true,minLength:4})}  type='text'/>
          </label>
          <label className={classes.label}>
            PASSWORD
            <input {...register('password',{required:true,minLength:4})}  type='password'/>
          </label>
          <label className={classes.label}>
            REPEAT PASSWORD
            <input {...register('rePassword',{required:true})} type='password'/>
          </label>
          <label className={classes.label}>
            EMAIL
            <input {...register('mail',{required:true})} type='text'/>
          </label>
          <button className={classes.button} type='submit'>REGISTER</button>
        </form>
        {
          !isRegisterFailed && <p>Registration Completed</p>
        }
        
      </div>
    )
}

export default Register
