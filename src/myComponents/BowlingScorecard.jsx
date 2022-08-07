import React from "react";
import "../App.css";

const BowlingScorecard = ({ bowl }) => {
	return (
		<div className="bowingScorecard">
			{/* {console.log(bowl)} */}
			<strong>
				<h2>Bowling </h2>
			</strong>
			<br />
			{/* <h1>
				{bowl.inning
					.replace("Inning 1", "")
					.replace("Inning 2", "")
					.toUpperCase()}
			</h1> */}
			{/* <h2>
				{bat.totals.R}/{bat.totals.W}-{bat.totals.O}overs
			</h2> */}
			<div className="lineDiv"></div>

			{bowl.bowling.map((bowling) => (
				<div className="movieContainer">
					<strong>{bowling.bowler.name}</strong>
					<span className="dismissal">
						<small>
							{/* {batting["dismissal-text"]} */}
							<p className="bowlingDepartment">
								Overs:<strong>{bowling["o"]}</strong>| Runs:
								<strong>{bowling["r"]}</strong>| Wickets:
								<strong>{bowling["w"]}</strong>| Economy:
								<strong>{bowling["eco"]}</strong>
							</p>
						</small>
					</span>
				</div>
			))}
			<div className="lineDiv"></div>
			{/* <h2 className="dismissal">
				{bat.totals.R} / {bat.totals.W} - {bat.totals.O} Overs
			</h2> */}
			<hr />
		</div>
	);
};

export default BowlingScorecard;
