import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "pages/Home";
import About from "pages/About";
import BuzzeBee from "pages/BuzzeBee";
import Contact from "pages/ContactUs";
import NoMatch from "pages/NoMatch";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="verticals" element={<BuzzeBee />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
