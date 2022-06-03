import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Favorites from "./components/Favorites";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
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
