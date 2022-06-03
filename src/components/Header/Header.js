import { NavLink,Link } from "react-router-dom"
import classes from "./Header.module.css"
import classNames from "classnames"
import { HEADER_LINKS } from "../../helpers/constants"
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, selectIsAdmin, logOutUser } from './../../features/user/userSlice';
import App from './../../App';


function Header() {
  const currentUser = useSelector(selectCurrentUser)
  const isAdmin = useSelector(selectIsAdmin)

  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      { isAdmin ? (
        // -------------- Admin Menu ------------------
        <ul className={classes.ul}>
          <li>
            <NavLink
            className={({isActive})=>classNames(classes.link,{
              [classes.active]:isActive
            })}
            to='/admin'
            >Admin Panel</NavLink>
          </li>
            
          <li>
            <NavLink
            className={({isActive})=>classNames(classes.link,{
              [classes.active]:isActive
            })}
            to='/'
            >Home</NavLink>
            </li>
        </ul>
      ) : (
        // -------------- User Menu ------------------
        <ul className={classes.ul}>
          <li>
            <NavLink
            className={({isActive})=>classNames(classes.link,{
              [classes.active]:isActive
            })}
            to='/'
            >Best Films</NavLink>
          </li>
          <li>
            <NavLink
            className={({isActive})=>classNames(classes.link,{
              [classes.active]:isActive
            })}
            to='/aboutUs'
            >About Us</NavLink>
          </li>
          { currentUser && <li>
            <NavLink
            className={({isActive})=>classNames(classes.link,{
              [classes.active]:isActive
            })}
            to='/favorite'
            >Favorites</NavLink>
          </li>
          }
          
          { !currentUser && <li>
            <NavLink
            className={({isActive})=>classNames(classes.link,{
              [classes.active]:isActive
            })}
            to='/auth'
            >Auth</NavLink>
          </li>}
          
        </ul>
      )}
      
      {
        currentUser && !isAdmin && 
      <Link to ="/profile" className={classes.userLogo}>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="#"/>
      </Link> 
      }
     
      {
        currentUser &&  <input type='button' onClick={ () => dispatch(logOutUser())} value='Logout'/>
      }
      
    </header>
  )
}

export default Header