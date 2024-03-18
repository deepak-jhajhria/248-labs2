import Footer from "./components/Footer";
import GameFirst from "./components/GameFirst";
import Hero from "./components/Hero";
import LevelUpSec from "./components/LevelUpSec";
import MakeChoice from "./components/MakeChoice";
import OurTeam from "./components/OurTeam";
import RichWorld from "./components/RichSec";
import Roadmap from "./components/Roadmap";
import TwichSlider from "./components/TwichSlider";


export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <TwichSlider />
      <GameFirst />
      {/* <LevelUpSec /> */}
      {/* <MakeChoice /> */}
      {/* <RichWorld /> */}
      <OurTeam />
      <Roadmap />
      <Footer />
    </main>
  );
}
