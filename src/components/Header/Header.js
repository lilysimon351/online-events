import { NavLink,Link, useNavigate } from "react-router-dom"
import classes from "./Header.module.css"
import classNames from "classnames"
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, selectAllUsers, selectIsAdmin, logOutUser } from './../../features/user/userSlice';
import { LANGUAGES } from "../../helpers/constants";
import {useTranslate} from "../../context/LanguageProvider";
import { useState } from "react";

function Header() {
  const[langOption, setLangOption]= useState(LANGUAGES[0])

  const allUsers = useSelector(selectAllUsers)
  const currentUser = useSelector(selectCurrentUser)
  const currentUserInfo = allUsers?.find(item => item.username === currentUser)
  const isAdmin = useSelector(selectIsAdmin)
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {t, changeLanguage} = useTranslate()
  
  const handleChangeLang = e => {
    setLangOption(e.target.value)
    changeLanguage(e.target.value)
  }

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
      (
        <div className={classes.userProfile}>
          <Link to ="/profile" className={classes.userLogo}>
            <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="#"/>
          </Link> 
          <span>Balance: {currentUserInfo?.balance} AMD</span>
        </div>
      )
      }
     
      {
        currentUser &&  <input type='button' onClick={ () => {
          navigate('/');
          dispatch(logOutUser());
          }
        } value={t('LOG OUT')}/>
      }
      
        <select value={langOption} onChange={handleChangeLang}>
          <option value="AM">{t('armenian')}</option>
          <option value="RU">{t('russian')}</option>
          <option value="EN">{t('english')}</option>
        </select>
      </header>
  )
}

export default Header
