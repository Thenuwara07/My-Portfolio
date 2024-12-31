// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Technologies from "./components/Technologies";
// import Experience from "./components/Experience";
// import Project from "./components/Project";
// import Contact from "./components/Contact";

// function App() {
//   return (
//     <>
//       <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//         <div className="fixed top-0 -z-10 h-full w-full">
//           <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#005A9E_100%)]"></div>
//         </div>

//         <div className="container mx-auto px-8">
//           <Navbar />
//           <Hero />
//           <About />
//           <Technologies />
//           <Project />
//           <Experience />
//           <Contact />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import S_Hero from "./components/sport/S_Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
// import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Timeline from "./components/sport/Timeline";
import S_About from "./components/sport/S_About";
import Award from "./components/sport/Award";
import Leadership from "./components/sport/Leadership";

function App() {
  const [isSportMode, setIsSportMode] = useState(false);

  return (
    <>
      <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          {isSportMode && (
            <>
              <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#808080_100%)]"></div>
            </>
          )}
          {!isSportMode && (
            <>
              <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#005A9E_100%)]"></div>
            </>
          )}
        </div>

        <div className="container mx-auto px-8">
          <Navbar onSwitchChange={setIsSportMode} isSwitched={isSportMode} />
          {isSportMode && (
            <>
              <S_Hero />
              <S_About />
              <Award />
              <Leadership />
              <Timeline />
              <Contact />
            </>
          )}
          {!isSportMode && (
            <>
              <Hero />
              <About />
              <Technologies />
              <Project />
              {/* <Experience /> */}
              <Contact />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
