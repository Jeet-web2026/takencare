import About from "@/components/home/About";
import { Home as Hero } from "../components/home/Hero";
import Achive from "@/components/home/Achive";
import Ourservices from "@/components/home/Ourservices";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Achive />
      <Ourservices />
    </>
  );
}
