import { Link } from "react-router-dom"

import { Link } from 'react-router-dom';
import Admin from './../Admin/Admin';

const Profile = () => {
  return (
    <div>
      User profile 
      <Link to='/admin'>Admin</Link>
    </div>
  )
}

export default Profile
