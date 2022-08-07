import React from "react";
import "../App.css";

const BattingScorecard = ({ bat }) => {
	return (
		<div className="battingScorecard">
			{/* {console.log(bat)} */}
			{/* <h1>{bat.inning}</h1> */}
			<strong>
				<h2>
					{bat.inning
						.replace("Inning 1", "")
						.replace("Inning 2", "")
						.toUpperCase()}
				</h2>
			</strong>
			<br />
			{/* <h2>
				{bat.totals.R}/{bat.totals.W}-{bat.totals.O}overs
			</h2> */}
			<div className="lineDiv"></div>

			{bat.batting.map((batting) => (
				<div className="movieContainer">
					<strong>
						{batting.batsman.name} {batting["r"]}
						<sub>
							<small>{batting["b"]}</small>
						</sub>
					</strong>
					<span className="dismissal">
						<small>
							{batting["dismissal-text"]}
							<p>
								4s:<strong>{batting["4s"]}</strong>| 6s:
								<strong>{batting["6s"]}</strong>| SR:
								<strong>{batting["sr"]}</strong>
							</p>
						</small>
					</span>
				</div>
			))}
			<div className="lineDiv"></div>
			<h2 className="dismissal">
				{bat.totals.R} / {bat.totals.W} - {bat.totals.O} Overs
			</h2>
			<hr />
		</div>
	);
};

export default BattingScorecard;
