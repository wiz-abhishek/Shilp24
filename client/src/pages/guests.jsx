import React from "react";
import EmptyNote from "../components/EmptyNote";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../links/css/home.css";

const guests = ({ AllAuth }) => {
	return (
		<div className="App">
			<div className="body">
				<NavBar AllAuth={AllAuth} />
				<EmptyNote />
				<Footer />
			</div>
		</div>
	);
};

export default guests;
