import { useState } from "react";
import Conatainer from "./com/Conatainer";
import Header from "./com/Header";
import Nav from "./com/Nav";
import setTheme from "./theme";
import { darkBg, lightBg } from "./theme";

function App() {
  setTheme();
  const [category, setCategory] = useState("all");
  return (
    <div
      className={`min-h-screen h-max w-screen px-[5%] py-[2%] ${darkBg} ${lightBg}`}
    >
      {/* header */}
      <Header />
      {/* nav */}
      <Nav activeButton={category} setActiveButton={setCategory} />
      {/* container of extaintions */}
      <Conatainer category={category} />
    </div>
  );
}

export default App;
