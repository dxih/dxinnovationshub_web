import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Portfolio from "../components/Portfolio";
import WhyDXIH from "../components/WhyDXIH";
import GetStarted from "../components/GetStarted";

const LandingPage = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollToId) {
      const el = document.getElementById(state.scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  }, [state]);

  return (
    <>
      <Hero />
      <ServiceCard />
      <Portfolio />
      <WhyDXIH />
      <GetStarted />
    </>
  );
};

export default LandingPage;
