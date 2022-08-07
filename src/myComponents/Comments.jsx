import React, { useState, useRef, useEffect } from "react";
import "../App.css";

// 67526c94-f797-4645-a703-508e755a0352
// a446a312-ee43-4055-abce-0a3ca7f9ccac

const Comments = ({ matchId }) => {
	const data = useRef();
	const [comments, setComments] = useState([]);
	const [printComments, setPrintComments] = useState(false);
	// const getData = (val) => {
	// 	setComments(val.target.value);
	// 	console.log(val.target.value);
	// 	// val.target gives full input box
	// };
	const handleClick = () => {
		// matchId = "a";
		// console.log(matchId, "******************", data.current.value);
		setComments((prevComments) => [...prevComments, data.current.value]);
		// localStorage.setItem(`${matchId}`, JSON.stringify(comments));
	};

	// useEffect(() => {
	// 	setComments(localStorage.getItem(`${matchId}`));
	// }, []);

	return (
		<>
			<br />
			<div className="comments">
				<h2>Reviews:</h2>

				{/* {console.log("FEEDBACK")} */}
				<div>
					<div className="commentsArea">
						{/* <h3>
							hajsdhkjashdkjashdkjhsjkdhkjashdjka asdasdas asdasdasdasd
							asdasdasdasdasdas asdasdsd
						</h3>{" "} */}
						{/* <h2>{localStorage.getItem(`${matchId}`)}</h2> */}
						<h2>
							{/* {JSON.parse(localStorage.getItem(`${matchId}`)).map((c) => (
								<p>{c}</p>
							))} */}
						</h2>
						{/* {printComments ? <h3>{comments}</h3> : null} */}
					</div>
					<div className="inputCommentArea">
						{/* <form
							onSubmit={() => {
								"FORM CALLED";
							}}
						> */}
						<input
							type="text"
							ref={data}
							className="inputComments"
							placeholder="ENTER YOUR COMMENT"
							// onChange={getData}
							// value="IT WAS FUN12345678901234567890abcdefghijklmnopqrstuvwxyzIT WAS FUN12345678901234567890abcdefghijklmnopqrstuvwxyz"
						/>

						<button
							className="commentsButton"
							type="button"
							onClick={handleClick}
						>
							POST
						</button>
						{/* <button onClick={() => setprintComments(true)}>
								Print Value
							</button> */}
						{/* </form> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Comments;
