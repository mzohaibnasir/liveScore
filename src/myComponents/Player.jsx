import React, { useState } from "react";
import PlayerLogo from "../PlayerLogo.png";
import "../App.css";

const Player = ({ player }) => {
	const [showScorecard, setShowScorecard] = useState(false);
	return (
		<>
			<div className="PlayerInfo" onClick={() => setShowScorecard(true)}>
				<div className="details">
					<img
						className="playerImage"
						src={PlayerLogo}
						alt="Player logo"
						width={150}
					/>
					<h3>{player.name}</h3>
					<sub>{player.country}</sub>
					<br />
				</div>
			</div>
		</>
	);
};

export default Player;
