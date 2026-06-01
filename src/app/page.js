import About_h from "@/Compunents/Home/About_h";
import Frequently from "@/Compunents/Home/Frequently";
import Hero from "@/Compunents/Home/Hero";
import Pricing from "@/Compunents/Home/Pricing";
import Project from "@/Compunents/Home/Project";
import Support from "@/Compunents/Home/Support";
import Team from "@/Compunents/Home/Team";
import Technology from "@/Compunents/Home/Technology";
import Navbar from "@/Compunents/Navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Technology/>
    <About_h/>
    <Project/>
    <Team/>
    <Support/>
    <Pricing/>
    <Frequently/>

    </>
  );
}
