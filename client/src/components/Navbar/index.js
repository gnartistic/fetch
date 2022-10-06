import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import Ball from "../../assets/images/invertedBall.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faComment,
	faUser,
	faUserFriends,
	faHome,
	faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Auth from "../../utils/auth";
//

const bg = {
	height: "8rem",
	width: "100%",
	background: "linear-gradient(90deg, #637dec 0%,#7068ce 20%, #7e55af 100%)",
};

const Navbar = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<>
			<div className="nav-bar2" style={bg}></div>
			<div className="nav-bar" style={bg}>
				{/* logo container */}
				<div className="logo-zone">
					<h1>
						<img src={Ball} alt="fetch logo" />
						Fetch
					</h1>
				</div>
				{/* icon container */}
				<nav>
					<NavLink
						exact="true"
						activeclassname="active"
						className="home-link"
						to="/home"
					>
						<FontAwesomeIcon className="icon" icon={faHome} color="#fefefe" />
					</NavLink>
					<NavLink
						exact="true"
						activeclassname="active"
						className="profile-link"
						to="/profile"
					>
						<FontAwesomeIcon className="icon" icon={faUser} color="#fefefe" />
					</NavLink>
					<NavLink
						exact="true"
						activeclassname="active"
						className="friends-link"
						to="/friends"
					>
						<FontAwesomeIcon
							className="icon"
							icon={faUserFriends}
							color="#fefefe"
						/>
					</NavLink>
					<NavLink
						exact="true"
						activeclassname="active"
						className="chat-link"
						to="/chat"
					>
						<FontAwesomeIcon
							className="icon"
							icon={faComment}
							color="#fefefe"
						/>
					</NavLink>
					<NavLink
						exact="true"
						activeclassname="active"
						className="logout"
						to="/"
						onclick={logout}
					>
						<FontAwesomeIcon
							className="icon"
							icon={faRightFromBracket}
							color="#fefefe"
						/>
					</NavLink>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
