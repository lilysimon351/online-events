import { createContext } from "react"
import {ACTIVE_ROUTES} from '../helpers/constants'
import { useState,useContext } from "react"

const [LOGIN] = ACTIVE_ROUTES

const RouteContext = createContext(null)

const RouteProvider = ({children}) => {
    const [activeRoute, setActiveRoute] = useState(LOGIN);

  return <RouteContext.Provider value ={{activeRoute,setActiveRoute}}>
      {children}
  </RouteContext.Provider>
}

export const useAuthRoute =()=> useContext(RouteContext);
export default RouteProvider
