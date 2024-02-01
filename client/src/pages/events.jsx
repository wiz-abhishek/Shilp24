import "../links/css/home.css";
import "../links/css/events.css";
import NavBar from "../components/NavBar";
import InnovationOdyssey from "../components/InnovationOdyssey";
import TechShowcase from "../components/TechShowcase";
import CivilExpo from "../components/CivilExpo";
import ClashCarnival from "../components/ClashCarnival";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";

const events = ({ AllAuth }) => {
	return (
		<div className="App">
			<div className="body events-body">
				<NavBar AllAuth={AllAuth} />
				<InnovationOdyssey />
				<div className="Container">
					<TechShowcase></TechShowcase>
					<CivilExpo></CivilExpo>
					<ClashCarnival></ClashCarnival>
				</div>
				<Fade bottom>
					<Footer></Footer>
				</Fade>
			</div>
		</div>
	);
};

export default events;
