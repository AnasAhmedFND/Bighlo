import About_h from "@/Compunents/Home/About_h";
import Hero from "@/Compunents/Home/Hero";
import Project from "@/Compunents/Home/Project";
import Support from "@/Compunents/Home/Support";
import Team from "@/Compunents/Home/Team";
import Technology from "@/Compunents/Home/Technology";
import Navbar from "@/Compunents/Navbar";
import Image from "next/image";

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

    </>
  );
}
