import About from "./Components/About";
import References from "./Components/References";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Components/Error";
import HealthBenefits from "./Components/HealthBenefits";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />}>
            <Route index element={<References />} />
          </Route>
          <Route path="*" element={<Error />} />
          <Route path="references" element={<References />} />
          <Route path="health_benefits" element={<HealthBenefits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
