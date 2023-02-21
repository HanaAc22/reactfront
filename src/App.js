import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero";
import HeroCards from "./components/HeroCards";
import HeroServices from "./components/HeroServices";



export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
        <Hero />
        <HeroCards />
        <HeroServices />

    </div>
  );
}
