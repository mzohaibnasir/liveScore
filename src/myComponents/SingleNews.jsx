import React, { useState } from "react";

import "../App.css";
import FullScorecard from "./FullScorecard";

// const openFullScorecard = (match) => {
// 	console.log("CLICKED");
// 	<FullScorecard matchId={match.id} />;
// };

const SingleNews = ({ match }) => {
	const [showScorecard, setShowScorecard] = useState(false);

	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};
	return (
		<>
			<div className="newsContainer" onClick={() => window.open(match.url)}>
				<div className="details">
					<sup>{match.author} - </sup>
					<sup>{match.source.name}</sup>
					<br />
					<img
						src={match.urlToImage}
						// width={300}
						// height={200}
						// left={0}
						alt={match.source.name}
					/>
					<div>
						<h3>{match.title}</h3>
					</div>
					<div className="lineDiv"></div>

					<sup>{match.description}...</sup>
					<br />
				</div>
			</div>
		</>
	);
};

export default SingleNews;
