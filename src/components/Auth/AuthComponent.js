import { useMemo } from "react";
import {ACTIVE_ROUTES} from '../../helpers/constants'
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useSelector } from 'react-redux';
import { authRouteSelector } from './../../features/authTab/authTabSlice';

const [LOGIN,REGISTRATION] = ACTIVE_ROUTES
const component ={
    [LOGIN]:<Login/>,
    [REGISTRATION]:<Register/>
} 

const AuthComponent = () => {
  const activeRoute = useSelector(authRouteSelector)
  const ActiveComponent =useMemo(()=>component[activeRoute],[activeRoute])

  return (
    <>
      {ActiveComponent}
    </>
  )
}

export default AuthComponent
