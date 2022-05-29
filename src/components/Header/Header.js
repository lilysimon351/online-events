import { NavLink,Link } from "react-router-dom"
import classes from "./Header.module.css"
import classNames from "classnames"
import { HEADER_LINKS } from "../../helpers/constants"
import { useUserInfo } from "../../context/UserProvider"


function Header() {
  const {user,setUser} = useUserInfo()
   const logout = () => {
     setUser(null)
   }

  return (
    <header className={classes.header}>
      <ul className={classes.ul}>
      {
        HEADER_LINKS.map(link=>{
          if(link.title ==='AUTH' && user) {
            return null
          }
          if(link.title==="FAVORITES MOVIES" && !user){
            return null
          }
          return (
            <li key ={link.id}>
            <NavLink
            className={({isActive})=>classNames(classes.link,{
              [classes.active]:isActive
            })}
            to ={link.to}
            >{link.title}</NavLink>
            </li>
          )
        })
      }
      </ul>
      {
        user &&   
      <Link to ="/profile" className={classes.userLogo}>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="#"/>
      </Link> 
      }
     
      {
        user &&  <input type='button' onClick={logout} value='Logout'/>
      }
      
    </header>
  )
}

export default Header