import Nav from "../Components/Nav/Nav.tsx";
import HeroSection from "../Components/HeroSection.tsx";
import Events from "../Components/Events.tsx";
import Journey from "../Components/Journey.tsx";
import InfoSection from "../Components/InfoSection.tsx";
import Sports from "../Components/Sports.tsx";
import Register from "../Components/Register.tsx";
import JoinEcosystem from "../Components/JoinEcosystem.tsx";
import Sponsors from "../Components/Sponsors.tsx";
import Footer from "../Components/Footer.tsx";
const Mainpage = () => {
    return (
        <div>
            <Nav />
            <HeroSection />
            <Events />
            <Journey />
            <InfoSection />
            <Sports />
            <Register />
            <JoinEcosystem />
            <Sponsors />
            <Footer />
        </div>
    );
};

export default Mainpage;