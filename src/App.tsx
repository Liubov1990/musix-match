import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/LyricsContext";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";

import "./App.css";

function App(): React.ReactElement {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/lyrics/track/:id" element={<Lyrics />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
