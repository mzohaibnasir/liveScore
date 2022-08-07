import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import Match from "./myComponents/Match";
import "./CurrentMatches.css";

// 665cb34f-16f0-4511-b86a-ff64b0aca440
// 67526c94-f797-4645-a703-508e755a0352
// a446a312-ee43-4055-abce-0a3ca7f9ccac
// 8d757bff-f5a2-4f22-a873-27da51fcbcd4
// fb667dcb-adac-415f-9aad-413a83161a7e
// 34430ad5-275e-4a4a-8baa-6e57721f9ce5
// 236db577-4dd8-4eab-9183-278745d2a60d
// 7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f

const API_URL =
	"https://api.cricapi.com/v1/currentMatches?apikey=7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f&offset=1";
const CurrentMatches = () => {
	const [currentMatches, setCurrentMatches] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const searchMovies = async () => {
		const response = await fetch(API_URL);
		// console.log(response);
		const data = await response.json();
		console.log("MATCHES", data.data);
		setCurrentMatches(data.data);
		// console.log(currentMatches);

		// console.log(movies[1]);
	};
	useEffect(() => {
		searchMovies();
	}, []);

	return (
		<div className="currentMatches">
			{/* <div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
				<img
					src={SearchIcon}
					alt="search"
					onClick={() => {
						searchMovies(searchTerm);
					}}
				/> */}
			{/* </div> */}
			{currentMatches?.length > 0 ? (
				<div className="Container">
					{currentMatches.map((match) => (
						<>
							<Match match={match} key={match.id} />
						</>
					))}
					{/* <h1>working</h1> */}
				</div>
			) : (
				<div className="empty">
					<h2>"Not Found"</h2>
				</div>
			)}
		</div> //app
	);
};
// Parenthesis are used in an arrow function to return an object.

export default CurrentMatches;
