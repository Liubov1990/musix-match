import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import ContextProvider from "./context/AppContext";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";

function App(): React.ReactElement {
  return (
    <ThemeContextProvider>
      <ContextProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/lyrics/track/:id" element={<Lyrics />} />
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </ContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
