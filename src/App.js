import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
