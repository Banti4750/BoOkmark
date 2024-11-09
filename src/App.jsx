import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Hreo from "./component/Hreo";
import Feature from "./component/Feature";
import Speed from "./component/Speed";
import Simple from "./component/Simple";
import Easy from "./component/Easy";
import Download from "./component/Download";
import Card from "./component/Card";
import Faq from "./component/Faq";
import News from "./component/News";
import Fotter from "./component/Fotter";

function App() {
  return (
    <BrowserRouter>
      <div className="md:m-12 m-4 my-12 ">
        <Navbar />
      </div>
      <div className="md:m-14 m-4 my-14  ">
        <Hreo />
      </div>

      <Feature />

      {/* Routes section for defining route paths */}
      <Routes>
        <Route path="/speedy" element={<Speed />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/easy" element={<Easy />} />
      </Routes>

      <Download />
      <Faq />
      <News />
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
