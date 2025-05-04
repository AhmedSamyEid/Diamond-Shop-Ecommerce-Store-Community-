import Home from "./components/pages/Home.tsx";
import Cart from "./components/pages/Cart.tsx";
import AboutUs from "./components/pages/AboutUs.tsx";
import Contact from "./components/pages/Contact.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./components/layouts/PageLayout.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
