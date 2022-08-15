import React from "react";
// import { useEffect, useState } from "react";
import "./App.css";
// import SearchIcon from "./search.svg";
import Header from "./myComponents/Header";
import CurrentMatches from "./CurrentMatches";
import FullScorecard from "./myComponents/FullScorecard";
import PopupWindow from "./myComponents/PopupWindow";
import PlayersInfo from "./PlayersInfo";
import Footer from "./myComponents/Footer";
import Feedback from "./myComponents/Feedback";
import Comments from "./myComponents/Comments";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import News from "./News";
import ErrorPage from "./myComponents/ErrorPage";
const App = () => {
	return (
		<Router>
			{/* <a href="/home">Got to home page</a> */}
			{/* it will be same through every page */}
			<Header />
			<Routes>
				<Route path="/" element={<CurrentMatches />} />
				<Route path="/players" element={<PlayersInfo />} />
				<Route path="/news" element={<News />} />
				<Route path="/contact" element={<Feedback />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
		// <div className="container">
		// {/* <Header /> */}
		// {/* <CurrentMatches /> */}
		// {/* <FullScorecard /> */}
		// {/* <PopupWindow /> */}
		// {/* <Comments /> */}
		// {/* <PlayersInfo /> */}
		// {/* <Feedback /> */}

		// {/* <div className="search">
		// 	<input
		// 		placeholder="Search for movies"
		// 		value={searchTerm}
		// 		onChange={(e) => {
		// 			setSearchTerm(e.target.value);
		// 		}}
		// 	/>
		// 	<img
		// 		src={SearchIcon}
		// 		alt="search"
		// 		onClick={() => {
		// 			searchMovies(searchTerm);
		// 		}}
		// 	/> */}
		// {/* </div> */}
		// </div> //app
	);
};
// Parenthesis are used in an arrow function to return an object.

export default App;
