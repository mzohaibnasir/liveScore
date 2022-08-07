import React from "react";
import { useEffect, useState } from "react";
import "../App.css";

import "../CurrentMatches.css";

// import Feedback from "./Comments";
import BattingScorecard from "./BattingScorecard";
import BowlingScorecard from "./BowlingScorecard";
import Comments from "./Comments";

const API_URL =
	"https://api.cricapi.com/v1/match_scorecard?apikey=7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f&id=";

const FullScorecard = ({ matchId }) => {
	// console.log(matchId);
	// console.log("URL:", API_URL);
	const scorecard1 = {
		id: "196adafa-bb01-4363-b7d0-fb065e0af660",
		name: "West Indies vs India, 2nd T20I",
		matchType: "t20",
		status: "West Indies won by 5 wkts",
		venue: "Warner Park, Basseterre, St Kitts",
		date: "2022-08-01",
		dateTimeGMT: "2022-08-01T14:30:00",
		teams: ["West Indies", "India"],
		teamInfo: [
			{
				name: "India",
				shortname: "IND",
				img: "https://cdorgapi.b-cdn.net/img/teams/31-637877061080567215.webp",
			},
			{
				name: "West Indies",
				shortname: "WI",
				img: "https://cdorgapi.b-cdn.net/img/teams/100-637877077978319234.webp",
			},
		],
		score: [
			{
				r: 138,
				w: 10,
				o: 19.4,
				inning: "India Inning 1",
			},
			{
				r: 141,
				w: 5,
				o: 19.2,
				inning: "West Indies Inning 1",
			},
		],
		tossWinner: "West Indies",
		tossChoice: "bowl",
		matchWinner: "West Indies",
		series_id: "1f42281c-6e8c-40bc-ae84-7a3f6872b6d0",
		scorecard: [
			{
				batting: [
					{
						batsman: {
							id: "03bda674-3916-4d64-952e-00a6c19c01e1",
							name: "Rohit Sharma",
							altnames: ["Rohit Gurunath Sharma", "RG Sharma"],
						},
						dismissal: "catch",
						bowler: {
							id: "10237113-888e-4881-a360-4b08577f38cc",
							name: "Obed McCoy",
						},
						catcher: {
							id: "7d053d4e-a735-4c96-bb98-4098dee523df",
							name: "Akeal Hosein",
						},
						"dismissal-text": "c Akeal Hosein b Obed McCoy",
						r: 0,
						b: 1,
						"4s": 0,
						"6s": 0,
						sr: 0,
					},
					{
						batsman: {
							id: "8c579447-bfbd-4cf6-a283-db4dc1d5ac33",
							name: "Suryakumar Yadav",
						},
						dismissal: "catch",
						bowler: {
							id: "10237113-888e-4881-a360-4b08577f38cc",
							name: "Obed McCoy",
						},
						catcher: {
							id: "5c8a2a21-8ca8-48fd-96e4-8791d227453d",
							name: "Devon Thomas",
						},
						"dismissal-text": "c Devon Thomas b Obed McCoy",
						r: 11,
						b: 6,
						"4s": 0,
						"6s": 1,
						sr: 183.33,
					},
					{
						batsman: {
							id: "77791963-6c1b-4979-b07a-f910dee28cd9",
							name: "Shreyas Iyer",
						},
						dismissal: "catch",
						bowler: {
							id: "2ff6091e-f412-422d-a5fe-3d8d1a3dd673",
							name: "Alzarri Joseph",
						},
						catcher: {
							id: "5c8a2a21-8ca8-48fd-96e4-8791d227453d",
							name: "Devon Thomas",
						},
						"dismissal-text": "c Devon Thomas b Alzarri Joseph",
						r: 10,
						b: 11,
						"4s": 0,
						"6s": 1,
						sr: 90.91,
					},
					{
						batsman: {
							id: "a52b2d20-7c98-4238-9ba4-ec78419a5cc2",
							name: "Rishabh Pant",
						},
						dismissal: "catch",
						bowler: {
							id: "7d053d4e-a735-4c96-bb98-4098dee523df",
							name: "Akeal Hosein",
						},
						catcher: {
							id: "9f0b971f-b01f-47ed-9f42-f52f03158d7f",
							name: "Odean Smith",
						},
						"dismissal-text": "c Odean Smith b Akeal Hosein",
						r: 24,
						b: 12,
						"4s": 1,
						"6s": 2,
						sr: 200,
					},
					{
						batsman: {
							id: "a90b2371-5c53-4c29-a382-9b52d40a7548",
							name: "Hardik Pandya",
						},
						dismissal: "catch",
						bowler: {
							id: "f8e6accd-6b73-4869-93a6-d45519a361f0",
							name: "Jason Holder",
						},
						catcher: {
							id: "9f0b971f-b01f-47ed-9f42-f52f03158d7f",
							name: "Odean Smith",
						},
						"dismissal-text": "c Odean Smith b Holder",
						r: 31,
						b: 31,
						"4s": 1,
						"6s": 2,
						sr: 100,
					},
					{
						batsman: {
							id: "81b446e1-bfea-45a7-a15e-062b8157a323",
							name: "Ravindra Jadeja",
							altnames: ["Ravindrasinh Anirudhsinh Jadeja", "Jadeja"],
						},
						dismissal: "catch",
						bowler: {
							id: "10237113-888e-4881-a360-4b08577f38cc",
							name: "Obed McCoy",
						},
						catcher: {
							id: "c699ec2b-a5f6-4ee0-a42d-79391b65b293",
							name: "Rovman Powell",
						},
						"dismissal-text": "c Rovman Powell b Obed McCoy",
						r: 27,
						b: 30,
						"4s": 0,
						"6s": 1,
						sr: 90,
					},
					{
						batsman: {
							id: "b3d830d8-5349-407a-bc51-59f2d15a92de",
							name: "Dinesh Karthik",
						},
						dismissal: "catch",
						bowler: {
							id: "10237113-888e-4881-a360-4b08577f38cc",
							name: "Obed McCoy",
						},
						catcher: {
							id: "2ff6091e-f412-422d-a5fe-3d8d1a3dd673",
							name: "Alzarri Joseph",
						},
						"dismissal-text": "c Alzarri Joseph b Obed McCoy",
						r: 7,
						b: 13,
						"4s": 0,
						"6s": 0,
						sr: 53.85,
					},
					{
						batsman: {
							id: "0068c9d8-be69-46b9-bbef-62c74e480781",
							name: "Ravichandran Ashwin",
						},
						dismissal: "catch",
						bowler: {
							id: "10237113-888e-4881-a360-4b08577f38cc",
							name: "Obed McCoy",
						},
						catcher: {
							id: "9f0b971f-b01f-47ed-9f42-f52f03158d7f",
							name: "Odean Smith",
						},
						"dismissal-text": "c Odean Smith b Obed McCoy",
						r: 10,
						b: 6,
						"4s": 2,
						"6s": 0,
						sr: 166.67,
					},
					{
						batsman: {
							id: "3f3ecf51-8411-4046-9477-18c0fe3da6ac",
							name: "Bhuvneshwar Kumar",
						},
						dismissal: "catch",
						bowler: {
							id: "10237113-888e-4881-a360-4b08577f38cc",
							name: "Obed McCoy",
						},
						catcher: {
							id: "5c8a2a21-8ca8-48fd-96e4-8791d227453d",
							name: "Devon Thomas",
						},
						"dismissal-text": "c Devon Thomas b Obed McCoy",
						r: 1,
						b: 3,
						"4s": 0,
						"6s": 0,
						sr: 33.33,
					},
					{
						batsman: {
							id: "332200ad-d1f8-4035-95c5-b33bd1c9a939",
							name: "Avesh Khan",
						},
						dismissal: "bowled",
						bowler: {
							id: "f8e6accd-6b73-4869-93a6-d45519a361f0",
							name: "Jason Holder",
						},
						"dismissal-text": "b Holder",
						r: 8,
						b: 4,
						"4s": 0,
						"6s": 1,
						sr: 200,
					},
					{
						batsman: {
							id: "607ff10c-5619-411d-a822-06ba28992230",
							name: "Arshdeep Singh",
						},
						"dismissal-text": "not out",
						r: 1,
						b: 1,
						"4s": 0,
						"6s": 0,
						sr: 100,
					},
				],
				bowling: [
					{
						bowler: {
							id: "10237113-888e-4881-a360-4b08577f38cc",
							name: "Obed McCoy",
						},
						o: 4,
						m: 1,
						r: 17,
						w: 6,
						nb: 0,
						wd: 1,
						eco: 4.2,
					},
					{
						bowler: {
							id: "2ff6091e-f412-422d-a5fe-3d8d1a3dd673",
							name: "Alzarri Joseph",
						},
						o: 4,
						m: 0,
						r: 29,
						w: 1,
						nb: 0,
						wd: 0,
						eco: 7.2,
					},
					{
						bowler: {
							id: "9f0b971f-b01f-47ed-9f42-f52f03158d7f",
							name: "Odean Smith",
						},
						o: 4,
						m: 0,
						r: 43,
						w: 0,
						nb: 0,
						wd: 2,
						eco: 10.8,
					},
					{
						bowler: {
							id: "7d053d4e-a735-4c96-bb98-4098dee523df",
							name: "Akeal Hosein",
						},
						o: 4,
						m: 0,
						r: 22,
						w: 1,
						nb: 0,
						wd: 0,
						eco: 5.5,
					},
					{
						bowler: {
							id: "f8e6accd-6b73-4869-93a6-d45519a361f0",
							name: "Jason Holder",
						},
						o: 3.4,
						m: 0,
						r: 23,
						w: 2,
						nb: 0,
						wd: 1,
						eco: 6.3,
					},
				],
				catching: [
					{
						stumped: 0,
						runout: 0,
						catch: 1,
						catcher: {
							id: "7d053d4e-a735-4c96-bb98-4098dee523df",
							name: "Akeal Hosein",
						},
					},
					{
						stumped: 0,
						runout: 0,
						catch: 3,
						catcher: {
							id: "5c8a2a21-8ca8-48fd-96e4-8791d227453d",
							name: "Devon Thomas",
						},
					},
					{
						stumped: 0,
						runout: 0,
						catch: 3,
						catcher: {
							id: "9f0b971f-b01f-47ed-9f42-f52f03158d7f",
							name: "Odean Smith",
						},
					},
					{
						stumped: 0,
						runout: 0,
						catch: 1,
						catcher: {
							id: "c699ec2b-a5f6-4ee0-a42d-79391b65b293",
							name: "Rovman Powell",
						},
					},
					{
						stumped: 0,
						runout: 0,
						catch: 1,
						catcher: {
							id: "2ff6091e-f412-422d-a5fe-3d8d1a3dd673",
							name: "Alzarri Joseph",
						},
					},
				],
				extras: {
					r: 8,
					b: 0,
					lb: 4,
					w: 4,
					nb: 0,
					p: 0,
				},
				totals: {
					R: 138,
					O: 19.4,
					W: 10,
					RR: 7.02,
				},
				inning: "India Inning 1",
			},
			{
				batting: [
					{
						batsman: {
							id: "444e0a55-ec85-4ee1-9557-f1a51a96a7d5",
							name: "Brandon King",
						},
						dismissal: "bowled",
						bowler: {
							id: "332200ad-d1f8-4035-95c5-b33bd1c9a939",
							name: "Avesh Khan",
						},
						"dismissal-text": "b Avesh Khan",
						r: 68,
						b: 52,
						"4s": 8,
						"6s": 2,
						sr: 130.77,
					},
					{
						batsman: {
							id: "cae3f250-2552-404d-b3a1-a5515ab184e7",
							name: "Kyle Mayers",
						},
						dismissal: "catch",
						bowler: {
							id: "a90b2371-5c53-4c29-a382-9b52d40a7548",
							name: "Hardik Pandya",
						},
						catcher: {
							id: "0068c9d8-be69-46b9-bbef-62c74e480781",
							name: "Ravichandran Ashwin",
						},
						"dismissal-text": "c Ashwin b Hardik Pandya",
						r: 8,
						b: 14,
						"4s": 1,
						"6s": 0,
						sr: 57.14,
					},
					{
						batsman: {
							id: "4e8ab9cd-c5af-430e-887b-d22bf74ad052",
							name: "Nicholas Pooran",
						},
						dismissal: "catch",
						bowler: {
							id: "0068c9d8-be69-46b9-bbef-62c74e480781",
							name: "Ravichandran Ashwin",
						},
						catcher: {
							id: "8c579447-bfbd-4cf6-a283-db4dc1d5ac33",
							name: "Suryakumar Yadav",
						},
						"dismissal-text": "c Suryakumar Yadav b Ashwin",
						r: 14,
						b: 11,
						"4s": 1,
						"6s": 1,
						sr: 127.27,
					},
					{
						batsman: {
							id: "42667526c94-f797-4645-a703-508e755a039d64c-962d-4cd9-b2d2-1a62f51256b8",
							name: "Shimron Hetmyer",
						},
						dismissal: "cb",
						bowler: {
							id: "81b446e1-bfea-45a7-a15e-062b8157a323",
							name: "Ravindra Jadeja",
							altnames: ["Ravindrasinh Anirudhsinh Jadeja", "Jadeja"],
						},
						"dismissal-text": "c and b Ravindra Jadeja",
						r: 6,
						b: 10,
						"4s": 1,
						"6s": 0,
						sr: 60,
					},
					{
						batsman: {
							id: "5c8a2a21-8ca8-48fd-96e4-8791d227453d",
							name: "Devon Thomas",
						},
						"dismissal-text": "not out",
						r: 31,
						b: 19,
						"4s": 1,
						"6s": 2,
						sr: 163.16,
					},
					{
						batsman: {
							id: "c699ec2b-a5f6-4ee0-a42d-79391b65b293",
							name: "Rovman Powell",
						},
						dismissal: "bowled",
						bowler: {
							id: "607ff10c-5619-411d-a822-06ba28992230",
							name: "Arshdeep Singh",
						},
						"dismissal-text": "b Arshdeep Singh",
						r: 5,
						b: 8,
						"4s": 0,
						"6s": 0,
						sr: 62.5,
					},
					{
						batsman: {
							id: "9f0b971f-b01f-47ed-9f42-f52f03158d7f",
							name: "Odean Smith",
						},
						"dismissal-text": "not out",
						r: 4,
						b: 4,
						"4s": 0,
						"6s": 0,
						sr: 100,
					},
				],
				bowling: [
					{
						bowler: {
							id: "3f3ecf51-8411-4046-9477-18c0fe3da6ac",
							name: "Bhuvneshwar Kumar",
						},
						o: 2,
						m: 0,
						r: 12,
						w: 0,
						nb: 0,
						wd: 0,
						eco: 6,
					},
					{
						bowler: {
							id: "607ff10c-5619-411d-a822-06ba28992230",
							name: "Arshdeep Singh",
						},
						o: 4,
						m: 0,
						r: 26,
						w: 1,
						nb: 1,
						wd: 0,
						eco: 6.5,
					},
					{
						bowler: {
							id: "81b446e1-bfea-45a7-a15e-062b8157a323",
							name: "Ravindra Jadeja",
							altnames: ["Ravindrasinh Anirudhsinh Jadeja", "Jadeja"],
						},
						o: 3,
						m: 0,
						r: 16,
						w: 1,
						nb: 0,
						wd: 0,
						eco: 5.3,
					},
					{
						bowler: {
							id: "0068c9d8-be69-46b9-bbef-62c74e480781",
							name: "Ravichandran Ashwin",
						},
						o: 4,
						m: 0,
						r: 32,
						w: 1,
						nb: 0,
						wd: 0,
						eco: 8,
					},
					{
						bowler: {
							id: "a90b2371-5c53-4c29-a382-9b52d40a7548",
							name: "Hardik Pandya",
						},
						o: 4,
						m: 0,
						r: 22,
						w: 1,
						nb: 0,
						wd: 1,
						eco: 5.5,
					},
					{
						bowler: {
							id: "332200ad-d1f8-4035-95c5-b33bd1c9a939",
							name: "Avesh Khan",
						},
						o: 2.2,
						m: 0,
						r: 31,
						w: 1,
						nb: 1,
						wd: 0,
						eco: 13.3,
					},
				],
				catching: [
					{
						stumped: 0,
						runout: 0,
						catch: 1,
						catcher: {
							id: "0068c9d8-be69-46b9-bbef-62c74e480781",
							name: "Ravichandran Ashwin",
						},
					},
					{
						stumped: 0,
						runout: 0,
						catch: 1,
						catcher: {
							id: "8c579447-bfbd-4cf6-a283-db4dc1d5ac33",
							name: "Suryakumar Yadav",
						},
					},
				],
				extras: {
					r: 5,
					b: 0,
					lb: 2,
					w: 1,
					nb: 2,
					p: 0,
				},
				totals: {
					R: 141,
					O: 19.2,
					W: 5,
					RR: 7.29,
				},
				inning: "West Indies Inning 1",
			},
		],
	};

	const [newScorecard, setNewScorecard] = useState(scorecard1);
	const [searchTerm, setSearchTerm] = useState("");

	const searchMovies = async () => {
		try {
			// setNewScorecard("");
			const response = await fetch(`${API_URL}${matchId}`);
			// console.log(`apiurl:${API_URL}${matchId}`);
			const data = await response.json();
			// console.log("XXXXXXXXXXXXXXXXXXXXXXXXX");

			// console.log("FULL SCORECARD::::::::::::", data.data);
			setNewScorecard(data.data);

			// const {data}=data;
			// console.log("STATE:", newScorecard, "END");
			// 	// setCurrentMatches(data.data);
			// 	// console.log(currentMatches);

			// 	// console.log(movies[1]);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		// let newURL=API_URL+"
		searchMovies();
		// console.log("Scorecard", scorecard1);
		// console.log("ID::::", matchId);
	}, []);

	return (
		<>
			<div className="scoreCard ">
				<div className="matchStatus">
					<sub>{newScorecard.date}</sub>
					<br />
					<sub>{newScorecard.name}</sub>
					<h2>{newScorecard.status.toUpperCase()}</h2>
				</div>
				<div className="lineDivScorecard"></div>

				<div className="container">
					{newScorecard.scorecard.map((item) => (
						<>
							{console.log("Batting:|  ", item)}
							<BattingScorecard bat={item} />

							<BowlingScorecard bowl={item} />
							<div className="lineDivScorecard"></div>
						</>
					))}
				</div>
				<div>
					<Comments matchId={matchId} />
				</div>
			</div>
			{/* //scorecard */}
		</>
	);
};

export default FullScorecard;
