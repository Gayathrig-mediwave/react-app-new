import { HomePage } from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  //render movie form & movielist:
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
