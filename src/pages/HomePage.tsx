import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Progress from "../components/Progress";
import AppDownload from "@/components/AppDownload";
import LatestNews from "@/components/News";
import TeamMembers from "@/components/Team";
import Footer from "@/components/Footer";
import { useAOSInit } from "@/lib/useAOSInit";

const HomePage = () => {
  useAOSInit();
  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <Header />

      <Hero />

      <Services />

      <Progress />

      <AppDownload />

      <LatestNews />

      <TeamMembers />

      <Footer />
    </section>
  );
};

export default HomePage;
