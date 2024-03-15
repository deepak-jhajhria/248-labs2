import GameFirst from "./components/GameFirst";
import Hero from "./components/Hero";
import TwichSlider from "./components/TwichSlider";


export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <TwichSlider />
      <GameFirst />
    </main>
  );
}
