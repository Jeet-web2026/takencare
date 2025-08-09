import About from "@/components/home/About";
import { Home as Hero } from "../components/home/Hero";
import Achive from "@/components/home/Achive";
import Ourservices from "@/components/home/Ourservices";
import Appointmentcall from "@/components/home/Appointmentcall";
import Whyus from "@/components/home/Whyus";
import Ourteam from "@/components/home/Ourteam";
import Feedbacks from "@/components/home/Feedbacks";
import Howitworks from "@/components/home/Howitworks";
import Awards from "@/components/home/Awards";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Achive />
      <Ourservices />
      <Appointmentcall />
      <Whyus />
      <Ourteam />
      <Feedbacks />
      <Howitworks />
      <Awards />
    </>
  );
}
