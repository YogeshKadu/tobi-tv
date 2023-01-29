import React from "react";
import Header from "./_components/Header";
import Section from "./_components/Section";
function App() {
  return (
    <div className="App bg-[#10141f] min-h-screen text-white">
      <Header />
      <div className="w-full h-52 md:h-40 lg:h-80 bg-gradient-to-br from-cyan-400 to-violet-700"></div>
      <div className="w-full h-52 md:h-80 bg-gradient-to-tr from-cyan-400 to-violet-700"></div>
      <Section />
    </div>
  );
}

export default App;
