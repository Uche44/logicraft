import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Progress from "../components/Progress";
import AppDownload from "@/components/AppDownload";
import LatestNews from "@/components/News";
import TeamMembers from "@/components/Team";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <section className="w-full min-h-screen px-6">
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
