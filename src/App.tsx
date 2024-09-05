import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";

import GlobalStyles from "./globalStyles";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Restaurant from "./pages/Restaurant";
import ModalProvider from "./contexts/ModalContext";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/restaurante/:id' element={<Restaurant />} />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      <Footer />
    </Provider>
  )
}

export default App;
