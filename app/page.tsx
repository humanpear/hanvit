import About from "@/components/sections/about";
import ContactUs from "@/components/sections/contactUs";
import Home from "@/components/sections/home";
import Portfolio from "@/components/sections/portfolio";
import Process from "@/components/sections/process";

export default function Main() {
  return (
    <main className="flex flex-col">
      <Home />
      <About />
      <Portfolio />
      <Process />
      <ContactUs />
    </main>
  );
}
