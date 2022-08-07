import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className="header">
				<span className="left">
					<Link to="/" className="appTitle">
						liveScore
					</Link>
				</span>
				<span className="right">
					<Link to="/" className="appTitle">
						Home
					</Link>
					<span className="appTitle">
						{" "}
						<Link to="/players">Players</Link>
					</span>
					<span className="appTitle">
						{" "}
						<Link to="/contact">Contact</Link>
					</span>
					{/* <span className="appTitle">liveScore</span> */}
				</span>
			</div>
		</>
	);
};

export default Header;
