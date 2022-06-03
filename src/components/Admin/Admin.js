import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsAdmin } from './../../features/user/userSlice';
import { useEffect } from "react";

export default function Admin() {
	return (
		<div className="admin-page">
			<Outlet />
		</div>
	);
}
