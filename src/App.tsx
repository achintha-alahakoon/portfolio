import { Navbar } from './components/Navbar';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { TechStack } from './pages/TechStack';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Education } from './pages/Education';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';

function AppContent() {

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export function App() {
  return <AppContent />;
}