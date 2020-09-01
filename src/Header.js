import React from 'react'
import './Header.css';
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTimeRounded"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutlineRounded"
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Header() {
	const [state, dispatch] = useStateValue();

  return (
		<div className="header">
			<div className="header__left">
				<Avatar
					className="header__avatar"
					alt={state.user.displayName} //user?.displayName}
					src={state.user.photoURL} //user?.photoURL}
				/>
				<AccessTimeIcon />
			</div>
			<div className="header__search">
        <SearchIcon />
        <input placeholder = "Search for channels"/>
			</div>
			<div className="header__right">
				<HelpOutlineIcon />
			</div>
		</div>
	);
}

export default Header;