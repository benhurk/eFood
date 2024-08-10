import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./globalStyles";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Restaurant from "./pages/Restaurant";
import ModalProvider from "./contexts/ModalContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/restaurante' element={<Restaurant />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
      <Footer />
    </>
  )
}

export default App;
