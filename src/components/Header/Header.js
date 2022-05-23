import { Link } from "react-router-dom"
import classes from "./Header.module.css"

function Header() {
  return (
    <div className={classes.header}>
      <Link to="/home">
        <div className={classes.logo}>Movie app</div>
     
      </Link>
      <div className={classes.userLogo}>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="#"/>
      </div>

    </div>
  )
}

export default Header