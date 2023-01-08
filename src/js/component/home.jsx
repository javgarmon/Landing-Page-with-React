import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


const Home = function() {
	return (
	<>
	<Navbar/>
	<div className="container-fluid">
		<Jumbotron/>
		<div className="card-group">
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		</div>
	</div>
	<Footer/>
	</>
	);
};

export default Home;
