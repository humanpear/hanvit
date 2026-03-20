import About from "@/components/sections/about";
import ContactUs from "@/components/sections/contactUs";
import Estimate from "@/components/sections/estimate";
import Home from "@/components/sections/home";
import Portfolio from "@/components/sections/portfolio";
import Process from "@/components/sections/process";

export default function Main() {
  return (
    <main className="flex flex-col select-none">
      <Home />
      <About />
      <Portfolio />
      <Process />
      <Estimate />
      <ContactUs />
    </main>
  );
}
