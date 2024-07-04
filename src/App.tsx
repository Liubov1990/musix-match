import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/LyricsContext";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";
import PageNotFound from "./pages/PageNotFound";
import PageLayout from "./components/PageLayout";
import "./App.css";

function App(): React.ReactElement {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
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
