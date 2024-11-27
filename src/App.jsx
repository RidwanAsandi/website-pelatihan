import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKeten from "./pages/SyaratKeten"
import FaqComponent from "./Components/FaqComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqComponent} />
        <Route path="/syaratketen" Component={SyaratKeten} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
