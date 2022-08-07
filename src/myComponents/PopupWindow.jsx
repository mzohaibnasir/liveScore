import React from "react";
import Popup from "reactjs-popup";
import FullScorecard from "./FullScorecard";
import "../App.css";

// import "reactjs-popup/dist/index.css";

const PopupWindow = () => (
	<Popup
		className="popupWindow"
		trigger={<button> Trigger</button>}
		// position="absolute"
	>
		<div>
			<FullScorecard />
		</div>
	</Popup>
);

export default PopupWindow;
