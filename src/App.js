import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Favorites from "./components/Favorites";
import Homepage from "./components/Homepage";
import { ToastContainer, Flip } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer autoClose={1000} hideProgressBar transition={Flip} />
      <Router>
        <Routes>
          <Route exact path="/" element={
          <Layout 
          children={<Homepage />}
          />} />
          <Route
            exact
            path="/favorites"
            element={
              <Layout 
              children={<Favorites />}
              />
            }
          />
        </Routes>
        </Router>
    </>
  );
}

export default App;
