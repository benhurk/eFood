import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./globalStyles";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/restaurante' element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
