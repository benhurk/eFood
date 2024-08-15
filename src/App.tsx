import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";

import GlobalStyles from "./globalStyles";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Restaurant from "./pages/Restaurant";
import ModalProvider from "./contexts/ModalContext";
import RestaurantProvider from "./contexts/RestaurantContext";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RestaurantProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/restaurante/:id' element={<Restaurant />} />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </RestaurantProvider>
      <Footer />
    </Provider>
  )
}

export default App;
