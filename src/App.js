import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Section from "./_components/Section";
import SearchComponent from "./_components/SearchComponent";
import Theater from "./_components/Theater";
function App() {
  const [searchInput,setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleSearchInput = (text) => {
    setSearchInput(text);
    console.log(text);
  }
  const handleSearch = () => {
    // Route('./search');'
    // console.log(Route);
    navigate('/search/demo');
  }
  return (
    <div className="App bg-[#10141f] min-h-screen text-white">
      <Header handleInput={handleSearchInput} handleSearch={handleSearch} input={searchInput} />
      <Routes>
        <Route exact path="/" element={<Section />} />
        <Route exact path="/search/:searchtext" element={<SearchComponent />} />
        <Route exact path="/watch/:id" element={<Theater />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
