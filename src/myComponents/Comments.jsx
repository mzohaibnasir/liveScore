import React, { useState, useRef, useEffect } from "react";
import "../App.css";

// 67526c94-f797-4645-a703-508e755a0352
// a446a312-ee43-4055-abce-0a3ca7f9ccac

const Comments = ({ matchId }) => {
	const data = useRef();
	const [comments, setComments] = useState("");
	const [allComments, setAllComments] = useState([]);
	const [printComments, setPrintComments] = useState(false);
	// const getData = (val) => {
	// 	setComments(val.target.value);
	// 	console.log(val.target.value);
	// 	// val.target gives full input box
	// };
	// const handleClick = () => {
	// 	// matchId = "a";
	// 	// console.log(matchId, "******************", data.current.value);
	// 	setComments((prevComments) => [...prevComments, data.current.value]);
	// 	// localStorage.setItem(`${matchId}`, JSON.stringify(comments));
	// };

	// useEffect(() => {
	// 	setAllComments(localStorage.getItem(`${matchId}`));
	// }, [allComments]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!comments) {
			alert("Please add task");
			return;
		}
		addTask({ comments });
		console.log("comments:", comments);
		setComments("");
	};

	const addTask = (task) => {
		// console.log("ADDED", task);
		// const id = Math.floor(Math.random() * 1000) + 1;
		// const newTask = { id, ...task };
		console.log("Before: ", allComments);
		AllComments();
	};

	const AllComments = () => {
		setAllComments([...allComments, comments]);
		console.log("ALL COMMENTS:", allComments);
		// localStorage.setItem(`${matchId}`, JSON.stringify(allComments));
	};
	return (
		<>
			<br />
			<div className="comments">
				<h2>Reviews:</h2>

				{/* {console.log("FEEDBACK")} */}
				<div>
					<div className="commentsArea">
						{/* <h2>{localStorage.getItem(`${matchId}`)}</h2> */}
						{/* {JSON.parse(localStorage.getItem(`${matchId}`)).map((c) => (
								<p>{c}</p>
							))} */}
						{allComments && allComments.map((c) => <li>{c}</li>)}
					</div>
					<form className="inputCommentArea" onSubmit={onSubmit}>
						<input
							type="text"
							className="inputComments"
							placeholder="Enter your thoughts!"
							value={comments}
							onChange={(e) => {
								setComments(e.target.value);
								// console.log("COMMENTS:", comments);
							}}
						/>

						<input className="commentsButton" type="submit" value="POST" />
					</form>
				</div>
			</div>
		</>
	);
};

export default Comments;
