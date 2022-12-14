import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
// import Match from "./myComponents/Match";
import "./CurrentMatches.css";
import SingleNews from "./myComponents/SingleNews";

// 665cb34f-16f0-4511-b86a-ff64b0aca440
// 67526c94-f797-4645-a703-508e755a0352
// a446a312-ee43-4055-abce-0a3ca7f9ccac
// 8d757bff-f5a2-4f22-a873-27da51fcbcd4
// fb667dcb-adac-415f-9aad-413a83161a7e
// 34430ad5-275e-4a4a-8baa-6e57721f9ce5
// 236db577-4dd8-4eab-9183-278745d2a60d
// 7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f

// news
// 3130b87889c94b4da1915b306b3755ac
// https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3130b87889c94b4da1915b306b3755ac

const API_URL =
	"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3130b87889c94b4da1915b306b3755ac";
const News = () => {
	const [currentMatches, setCurrentMatches] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const news = {
		status: "ok",
		totalResults: 70,
		articles: [
			{
				source: {
					id: null,
					name: "NDTV News",
				},
				author: "Aditya Kumar",
				title:
					'"If You Are Expecting Wickets From Him...": Ex-India Cricketer\'s Big Claim About Ravichandran Ashwin.. - NDTV Sports',
				description:
					"After the T20 World Cup 2021, Ravichandran Ashwin has played five matches and picked six wickets, while IPL 2022 saw him claiming 12 wickets from 17 games.",
				url: "https://sports.ndtv.com/asia-cup-2022/if-you-are-expecting-wickets-from-him-ex-india-cricketers-big-claim-about-ravichandran-ashwin-3255520",
				urlToImage:
					"https://c.ndtvimg.com/2022-03/a1j1d864_ravichandran-ashwin_625x300_09_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
				publishedAt: "2022-08-15T06:16:00Z",
				content:
					"Former India cricketer Akash Chopra feels that spinner Ravichandran Ashwin cannot be relied on as a wicket-taking option in the shortest format as the bowler might fail sometimes. While lauding Ashwi… [+1385 chars]",
			},
			{
				source: {
					id: null,
					name: "NDTV News",
				},
				author: "Aditya Kumar",
				title:
					"Watch: Cheteshwar Pujara Scores 174 Off 131 Balls In Royal London One-Day Cup - NDTV Sports",
				description:
					"Cheteshwar Pujara hit 20 fours and five sixes during his 174-run knock that came off 131 balls against Surrey",
				url: "https://sports.ndtv.com/cricket/cheteshwar-pujara-scores-174-off-131-balls-in-royal-london-one-day-cup-watch-3255443",
				urlToImage:
					"https://c.ndtvimg.com/2022-08/7v8b3u0o_cheteshwar-pujara_625x300_14_August_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
				publishedAt: "2022-08-15T05:04:00Z",
				content:
					"Cheteshwar Pujara is on song at the ongoing Royal London One-Day Cup. Days after scoring a 79-ball 107 for Sussex against Warwickshire, the right-handed batter followed it with yet another century, t… [+1193 chars]",
			},
			{
				source: {
					id: null,
					name: "Cricketaddictor.com",
				},
				author: "More by Vicky Singh",
				title:
					"GSB vs BBS Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- FanCode ECS T10 Krefeld - Cricket Addictor",
				description:
					"GSB vs BBS Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- FanCode ECS T10 Krefeld",
				url: "https://cricketaddictor.com/fantasy-cricket/gsb-vs-bbs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ecs-t10-krefeld/",
				urlToImage:
					"https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/08/ECS-T10-Krefeld-Dream11-Prediction-Fantasy-Cricket-Tips-Dream11-Team.jpg",
				publishedAt: "2022-08-15T04:40:54Z",
				content:
					"GSB vs BBS Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of FanCode ECS T10 Krefeld match between Golden Star Bonn and Bonn Blue Star.\r\nGSB vs BBS Fa… [+4116 chars]",
			},
			{
				source: {
					id: "espn-cric-info",
					name: "ESPN Cric Info",
				},
				author: "Alan Gardner",
				title: "Death by T20 leagues? It's real, it's coming - ESPNcricinfo",
				description:
					"Perhaps you've been signed up for one and don't know about it yet",
				url: "https://www.espncricinfo.com/story/the-light-roller-death-by-t20-league-its-real-its-coming-1329215",
				urlToImage:
					"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/344200/344257.6.jpg",
				publishedAt: "2022-08-15T04:21:43Z",
				content:
					"Mauritius-Mauritania confusion is a no-no when you're a globetrotting T20 professional desirous of being at the right game on the right day of the week  •  Getty Images",
			},
			{
				source: {
					id: null,
					name: "Hindustan Times",
				},
				author: "HT Sports Desk",
				title:
					"Watch: Smriti Mandhana's epic reaction to journalist's 'Women's IPL' question - Hindustan Times",
				description:
					"After BCCI president Sourav Ganguly had admitted earlier this year that a Women's IPL will be held in 2023, the board has now reportedly earmarked a window for the much-awaited competition in March 2023.",
				url: "https://www.hindustantimes.com/cricket/watch-smriti-mandhana-s-epic-reaction-to-journalist-s-women-s-ipl-coming-next-year-question-101660534013223.html",
				urlToImage:
					"https://images.hindustantimes.com/img/2022/08/15/1600x900/New_Project_-_2022-08-15T090259.857_1660534430141_1660534439452_1660534439452.jpg",
				publishedAt: "2022-08-15T03:56:28Z",
				content:
					"Cricket fans across the globe and more so the cricketers themselves have long awaited for the Women's IPL. India cricket stars and also overseas players have over time voiced their opinion on a bigge… [+2208 chars]",
			},
			{
				source: {
					id: null,
					name: "NDTV News",
				},
				author: "Aditya Kumar",
				title:
					'"I Put Him In A Headlock And...": Ross Taylor Reveals How He Tackled "Annoying" David Warner - NDTV Sports',
				description:
					"While Ross Taylor revealed what he did to David Warner, he said that the move worked for him as he was able to control the southpaw.",
				url: "https://sports.ndtv.com/cricket/i-put-him-in-a-headlock-and-ross-taylor-reveals-how-he-tackled-annoying-david-warner-3255253",
				urlToImage:
					"https://c.ndtvimg.com/2022-04/fvo1nrjo_ross-taylor-afp_625x300_04_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
				publishedAt: "2022-08-15T03:25:56Z",
				content:
					"Former New Zealand player Ross Taylor has written an autobiography titled 'Ross Taylor: Black And White' and he has revealed many instances from his career. From recalling the moment when one of the … [+1522 chars]",
			},
			{
				source: {
					id: null,
					name: "NDTV News",
				},
				author: "NDTV Sports Desk",
				title:
					"Watch: Antonio Conte, Thomas Tuchel's Fiery Confrontation On Touchline After Chelsea-Tottenham Hotsp.. - NDTV Sports",
				description:
					"The biggest talking point about the game played at Stamford Bridge came after he full-time whistle was blown as managers of Chelsea and Spurs were involved in a heated confrontation at the touchline",
				url: "https://sports.ndtv.com/football/antonio-conte-thomas-tuchels-fiery-confrontation-on-touchline-after-chelsea-tottenham-hotspur-draw-watch-3255159",
				urlToImage:
					"https://c.ndtvimg.com/2022-08/k77ugt18_thomas-tuchel-antonio-conte-afp-_625x300_15_August_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
				publishedAt: "2022-08-15T03:03:51Z",
				content:
					"Chelsea and Tottenham Hotspur played out a thrilling draw on Sunday in the ongoing Premier League 2022-23 season and both sides had to settle for a point each. Chelsea and Spurs played out a 2-2 draw… [+1878 chars]",
			},
			{
				source: {
					id: null,
					name: "Insidesport.in",
				},
				author: null,
				title:
					"IPL 2023: Ravindra Jadeja and Chennai Super Kings BREAK-UP Final, Official announcement soon: Follow LIVE - InsideSport",
				description:
					"IPL 2023: Biggest news of IPL Season 16 is out, Ravindra Jadeja Chennai Super Kings to part way, Ravindra Jadeja CSK Break-UP Final, Indian Cricket live",
				url: "https://www.insidesport.in/ipl-2023-biggest-news-of-ipl-season-16-is-out-ravindra-jadeja-chennai-super-kings-set-to-part-way-official-confirmation-soon-follow-live-updates/",
				urlToImage:
					"https://www.insidesport.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-11-at-2.42.00-PM-1.jpeg?w=809",
				publishedAt: "2022-08-15T02:40:16Z",
				content:
					"IPL 2023 – Ravindra Jadeja CSK Break-UP Final? As reported earlier, Ravindra Jadeja is set to part way with Chennai Super Kings.…IPL 2023 – Ravindra Jadeja CSK Break-UP Final? As reported earlier, Ra… [+3178 chars]",
			},
			{
				source: {
					id: null,
					name: "Hindustan Times",
				},
				author: "HT Sports Desk",
				title:
					"Pant's straightforward response to threat from Karthik over place in India's XI - Hindustan Times",
				description:
					"Veterans and experts have opined in picking one between Rishabh Pant and Dinesh Karthik to get the combination right. And the youngster, in response to these claims and subsequent competition in the XI, has come with a straightforward reply.",
				url: "https://www.hindustantimes.com/cricket/rishabh-pant-s-straightforward-response-to-threat-from-dinesh-karthik-over-place-in-india-s-t20i-line-up-for-asia-cup-101660469464921.html",
				urlToImage:
					"https://images.hindustantimes.com/img/2022/08/14/1600x900/image_-_2022-08-12T131909.956_1660290601241_1660471072362_1660471072362.jpg",
				publishedAt: "2022-08-15T01:46:01Z",
				content:
					"Before India gear up for the T20 World Cup in Australia later in October, the Rohit Sharma-led side will have a chance to test themselves in the impending Asia Cup tournament which begins from August… [+1569 chars]",
			},
			{
				source: {
					id: null,
					name: "Hindustan Times",
				},
				author: "HT Sports Desk",
				title:
					"'No. 3 is proper top-order slot. He is being prepared for 2023 World Cup' - Hindustan Times",
				description:
					"The 22-year-old is currently enjoying a stellar form in world cricket but with Rahul coming to the fore, the young batter's run at the top might pause for a while.",
				url: "https://www.hindustantimes.com/cricket/no-3-is-proper-top-order-slot-he-is-being-prepared-for-2023-wc-ex-national-selector-s-bold-take-on-india-youngster-101660495235493.html",
				urlToImage:
					"https://images.hindustantimes.com/img/2022/08/14/1600x900/hooda-samson-iyer-gill_1658845207014_1660496037836_1660496037836.jpg",
				publishedAt: "2022-08-15T01:39:06Z",
				content:
					"With KL Rahul back in the mix for the Zimbabwe ODIs, the Indian team management can dish out a new opening pair, as young Shubman Gill waits for a chance on the back of impressive performances in the… [+2636 chars]",
			},
			{
				source: {
					id: null,
					name: "Hindustan Times",
				},
				author: "HT Sports Desk",
				title:
					"'Didn't know about Tendulkar. It was Saqlain who told me about his stature' - Hindustan Times",
				description:
					"The former Pakistan star made a huge claim on Sachin Tendulkar as he talked about his playing days.",
				url: "https://www.hindustantimes.com/cricket/didnt-know-about-sachin-tendulkar-it-was-saqlain-mushtaq-who-told-me-about-his-stature-shoaib-akhtar-s-big-claim-on-india-great-101660490498515.html",
				urlToImage:
					"https://images.hindustantimes.com/img/2022/08/14/1600x900/tendulkar-double-getty_1646177022070_1660492146525_1660492146525.jpg",
				publishedAt: "2022-08-15T01:36:05Z",
				content:
					"Team India will face Pakistan in a blockbuster clash in the men's Asia Cup game on August 28. Both sides will be meeting for the first time since the T20 World Cup match last year where the Babar Aza… [+1764 chars]",
			},
			{
				source: {
					id: null,
					name: "Managing Madrid",
				},
				author: "Matt_Wiltse",
				title:
					"Player Ratings: Almeria 1 - 2 Real Madrid; 2022 La Liga - Managing Madrid",
				description:
					"Goals from Lucas Vazquez and David Alaba turned the tide of the match and secured three points for Los Blancos",
				url: "https://www.managingmadrid.com/2022/8/15/23305557/player-ratings-almeria-1-2-real-madrid-2022-la-liga",
				urlToImage:
					"https://cdn.vox-cdn.com/thumbor/Bb2lvLhtv0FUO6UTVJxLuJG6tKI=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23945240/1414850521.jpg",
				publishedAt: "2022-08-15T01:29:46Z",
				content:
					"Carlo Ancelotti opted to rotate ahead of the first La Liga game of the season. Five players from the UEFA Super Cup victory were rested: Militao, Alaba, Casemiro, Modric, and Carvajal. In their place… [+4318 chars]",
			},
			{
				source: {
					id: null,
					name: "YouTube",
				},
				author: null,
				title:
					"Kylian Mbappe is OUT OF CONTROL! - Craig Burley reacts to Mbappe wanting Neymar out of PSG | ESPN FC - ESPN UK",
				description:
					"The ESPN FC crew react to reports that Kylian Mbappe wants Neymar to leave PSG.----Subscribe to ESPN UK: http://bit.ly/1oGUzVAFollow ESPN UK across multiple ...",
				url: "https://www.youtube.com/watch?v=q50TLXbZTZk",
				urlToImage: "https://i.ytimg.com/vi/q50TLXbZTZk/maxresdefault.jpg",
				publishedAt: "2022-08-15T01:22:45Z",
				content: null,
			},
			{
				source: {
					id: "espn-cric-info",
					name: "ESPN Cric Info",
				},
				author: "ESPNcricinfo staff",
				title:
					"Recent Match Report - New Zealand vs West Indies 3rd T20I 2022 - ESPNcricinfo",
				description:
					"Stand-in captain Powell added the finishing touches after a below-par batting display from New Zealand",
				url: "https://www.espncricinfo.com/series/new-zealand-tour-of-west-indies-2022-1317888/west-indies-vs-new-zealand-3rd-t20i-1317910/match-report",
				urlToImage:
					"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/344200/344250.6.jpg",
				publishedAt: "2022-08-15T00:07:21Z",
				content:
					"ReportStand-in captain Powell added the finishing touches after a below-par batting display from New Zealand",
			},
			{
				source: {
					id: "google-news",
					name: "Google News",
				},
				author: null,
				title:
					"Pablo Carreno Busta Battles Back For First Masters 1000 Crown - ATP Tour",
				description: null,
				url: "https://news.google.com/__i/rss/rd/articles/CBMiSWh0dHBzOi8vd3d3LmF0cHRvdXIuY29tL2VuL25ld3MvaHVya2Fjei1jYXJyZW5vLWJ1c3RhLW1vbnRyZWFsLTIwMjItZmluYWzSAQA?oc=5",
				urlToImage: null,
				publishedAt: "2022-08-14T22:41:15Z",
				content: null,
			},
			{
				source: {
					id: null,
					name: "Crictracker.com",
				},
				author: ", Pratheek S",
				title:
					"BPH vs TRT Match Prediction – Who will win today’s The Hundred Men’s match? - CricTracker",
				description:
					"BPH vs TRT Match Prediction – Read to find out who will win today’s match between Birmingham Phoenix vs Trent Rockets, The Hundred Cricket 2022, 15th Match.",
				url: "https://www.crictracker.com/bph-vs-trt-match-prediction-who-will-win-todays-the-hundred-mens-15th-match/",
				urlToImage:
					"https://www.crictracker.com/wp-content/uploads/2022/08/Dawid-Malan-The-Hundred.jpg",
				publishedAt: "2022-08-14T19:48:00Z",
				content:
					"Birmingham Phoenix and Trent Rockets face off in Match 15 of the ongoing The Hundred Mens in Edgbaston, Birmingham, on August 15, Monday. (Photo Source: Twitter)\r\nBirmingham Phoenix and Trent Rockets… [+2992 chars]",
			},
			{
				source: {
					id: "espn-cric-info",
					name: "ESPN Cric Info",
				},
				author: "ESPNcricinfo staff",
				title:
					"Maharaj, Rabada and Khaka among big winners at CSA awards - ESPNcricinfo",
				description:
					"Aiden Markram, Lizelle Lee, Janneman Malan and Laura Wolvaardt also honoured",
				url: "https://www.espncricinfo.com/story/keshav-maharaj-kagiso-rabada-and-ayabonga-khaka-among-big-winners-at-cricket-south-africa-awards-1329186",
				urlToImage:
					"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/335000/335057.6.jpg",
				publishedAt: "2022-08-14T19:10:31Z",
				content:
					"NewsAiden Markram, Lizelle Lee, Janneman Malan and Laura Wolvaardt also honoured",
			},
			{
				source: {
					id: null,
					name: "Bavarian Football Works",
				},
				author: "Schnitzel01",
				title:
					"Five observations from Bayern Munich’s comfortable 2-0 victory against Wolfsburg - Bavarian Football Works",
				description:
					"It seems Niko Kovac’s team couldn’t keep up with the 200mph Bavarian train once again. Match observations from a thoroughly clean job by Julian Nagelsmann’s new-look Bayern Munich.",
				url: "https://www.bavarianfootballworks.com/2022/8/14/23305372/bayern-munich-sadio-mane-jamal-musiala-muller-sane-lucas-upamecano-observations-match-analysis-buli",
				urlToImage:
					"https://cdn.vox-cdn.com/thumbor/mvMiX3l4qLlQWGoivsvrJWgNdxA=/0x0:3331x1744/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23944448/1242502776.jpg",
				publishedAt: "2022-08-14T18:50:00Z",
				content:
					"Bayern Munich's clash against VfL Wolfsburg had several background storylines, the most intriguing being the face-off between current and former head coaches Julian Nagelsmann versus Niko Kovac. Of c… [+7217 chars]",
			},
			{
				source: {
					id: "google-news",
					name: "Google News",
				},
				author: null,
				title: "Rafael Nadal On No. 1 Chance: 'It Means A Lot' - ATP Tour",
				description: null,
				url: "https://news.google.com/__i/rss/rd/articles/CBMiPWh0dHBzOi8vd3d3LmF0cHRvdXIuY29tL2VuL25ld3MvbmFkYWwtY2luY2lubmF0aS0yMDIyLXByZXZpZXfSAQA?oc=5",
				urlToImage: null,
				publishedAt: "2022-08-14T18:00:36Z",
				content: null,
			},
			{
				source: {
					id: "espn-cric-info",
					name: "ESPN Cric Info",
				},
				author: "Matt Roller",
				title:
					"Mandhana, Kemp and spinners sink van Niekerk-less Invincibles - ESPNcricinfo",
				description:
					"Mandhana's 46 helped Brave to 153 for 8, and Invincibles never got going in the chase",
				url: "https://www.espncricinfo.com/series/the-hundred-women-s-competition-2022-1299144/oval-invincibles-women-vs-southern-brave-women-6th-match-1299150/match-report",
				urlToImage:
					"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/344200/344217.6.jpg",
				publishedAt: "2022-08-14T17:28:05Z",
				content:
					"ReportMandhana's 46 helped Brave to 153 for 8, and Invincibles never got going in the chase\r\nSmriti Mandhana gave Southern Brave a good start  •  ECB/Getty Images\r\nSouthern Brave 153 for 8 (Mandhana … [+4490 chars]",
			},
		],
	};
	const searchMovies = async () => {
		const response = await fetch(API_URL);
		// console.log(response);
		const data = await response.json();
		console.log("MATCHES", data);
		setCurrentMatches(data.articles);
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
							<SingleNews
								match={match}
								key={match.url}
								// onClick={() => console.log("clicked")}
							/>
							{/* {console.log(match)} */}
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

export default News;
