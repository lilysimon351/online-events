import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";

export default function Admin() {

	return (
		<div style={{background: 'white',padding: '30px'}}>
			<Outlet />
		</div>
	);
}
