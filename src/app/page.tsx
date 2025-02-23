import ExperienceAndSkills from "../../components/ExperienceAndSkills";
import Hero from "../../components/Hero";
import GridComponent from "../../components/GridComponent";
import Projects from "../../components/Projects";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="bg-black-100 relative geist justify-center items-center flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <GridComponent />
        <ExperienceAndSkills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
