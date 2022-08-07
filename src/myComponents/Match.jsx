import React, { useState } from "react";

// import "../App.css";
import FullScorecard from "./FullScorecard";

// const openFullScorecard = (match) => {
// 	console.log("CLICKED");
// 	<FullScorecard matchId={match.id} />;
// };

const Match = ({ match }) => {
	const [showScorecard, setShowScorecard] = useState(false);
	return (
		<>
			{showScorecard === true ? (
				<FullScorecard matchId={match.id} />
			) : (
				<div className="movie" onClick={() => setShowScorecard(true)}>
					<div className="details">
						<h3>{match.name}</h3>
						<sub>{match.venue}</sub>
						<br />
						{/* <p>{match.id}</p> */}
						<sup>{match.date}</sup>
						<br />
						<br />
						<img
							src={match.teamInfo[0].img}
							width={100}
							height={100}
							alt={match.teamInfo[0].name}
						/>
						<img
							src={match.teamInfo[1].img}
							width={100}
							height={100}
							alt={match.teamInfo[1].name}
						/>
						<br />
						<br />
						<span className="scoreUpdate">
							{match.score.map((_score) => (
								<p>
									<strong>
										{_score.inning
											.replace("Inning 1", "")
											.replace("Inning 2", "")}
									</strong>
									: {_score.r}/{_score.w} - {_score.o} Overs
								</p>
							))}
						</span>
						<br />
						{/* <div className="lineDiv"></div> */}
						<h3>{match.status}</h3>
						<br />
					</div>
				</div>
			)}
		</>
	);
};

export default Match;
