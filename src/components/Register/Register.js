import {useForm} from 'react-hook-form'
import classes from './Register.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from './../../features/user/thunks/registerUser';
import { v4 } from 'uuid'
import { selectAllUsers, selectError, selectStatus } from '../../features/user/userSlice'
import { failedRegisterSelector } from '../../features/authTab/authTabSlice'

const Register = () => {

	const dispatch = useDispatch()
	const allUsers = useSelector(selectAllUsers)

	const isExistUser = (username) => {
		const index = allUsers.findIndex( item => item.username === username)
		return (index < 0) ? false : true
	}

	const isFailedRegister = useSelector(failedRegisterSelector)
	const error = useSelector(selectError)

    const {register, handleSubmit,formState:{errors}} = useForm({
		mode: 'onBlur'
	})
	
    const onSubmit = data => {

		dispatch(registerUserThunk({
			id: v4(),
			name: data.name,
			username: data.login,
			password: data.password,
			mail: data.mail,
			favorites: [],
			buyedTickets: []
		}))
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
            <input {...register('login',{
				required: 'this field is required',
				minLength:{
					value: 4,
					message: 'Minimum 4 symbols'
				},
				validate: value => !isExistUser(value) || "Choose another username"
			})}  type='text'
			/>
			
			<div style={{color: 'red'}}>{errors?.login && <p>{errors.login?.message || "Error"}</p>}</div>
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
          !isFailedRegister && <p>Registration Completed</p>
        }
        {
			error && <p>{error}</p>
		}
      </div>
    )
}

export default Register
