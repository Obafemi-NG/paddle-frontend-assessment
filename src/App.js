import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import HomePage from "./pages/HomePage/HomePage";
import GitHub from "./pages/GitHub/GitHub";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/github" element={<GitHub />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
