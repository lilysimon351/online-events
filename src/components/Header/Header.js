import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import classNames from "classnames";
import {HEADER_LINKS } from "../../helpers/constants";
import {LANGUAGES} from "../../helpers/constants";
import { useUserInfo } from "../../context/UserProvider";
import { useTranslate } from "../../context/LanguageProvider";
import {useState} from "react";

const Header = () => {
  const[langOption, setLangOption]= useState(LANGUAGES[0])
  
    const { user, setUser } = useUserInfo()
    const logout = () => {
      setUser(null)
    }

    const { t, changeLanguage } = useTranslate()
  
    const handleChangeLang = e => {
      setLangOption(e.target.value)
      changeLanguage(e.target.value)
    }
  
    return (
      <header className={classes.header}>
        <ul className={classes.ul}>
          {
            HEADER_LINKS.map(link => {
              if (link.title === 'AUTH' && user) {
                return null
              }
              return (
                <li key={link.id}>
                  <NavLink
                    className={({ isActive }) => classNames(classes.link, {
                      [classes.active]: isActive
                    })}
                    to={link.to}
                  >{t(link.title)}</NavLink>
                </li>
              )
            })
          }
        </ul>
        {
          user &&
          <div className={classes.userLogo}>
            <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="#" />
          </div>
        }
     
        {
          user && <input type='button' onClick={t(logout)} value='LOGOUT' />
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