import About from "./Components/About";
import References from "./Components/References";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Outlet, Route ,Routes} from "react-router-dom";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/references" element={<References />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
