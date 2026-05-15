import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Activities from "./components/Activities";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
   <div
className="
bg-gradient-to-br
from-[#020617]
via-[#071b3b]
to-[#0f172a]
text-white
overflow-x-hidden
min-h-screen
"
>
  <div className="fixed inset-0 -z-10 overflow-hidden">

<div className="
absolute
top-0
left-0
w-[500px]
h-[500px]
bg-cyan-500/20
blur-[150px]
rounded-full
"/>

<div className="
absolute
bottom-0
right-0
w-[500px]
h-[500px]
bg-purple-500/20
blur-[150px]
rounded-full
"/>

</div>
      <Navbar />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Resume />
      <Activities />
      <Certificates />
      <Contact />

      <Footer />
      <ScrollTop />

    </div>
  );
}

export default App;