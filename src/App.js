import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Elsa from "./pages/Elsa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/elsa" element={<Elsa />} />
      </Routes>
    </Router>
  );
}

export default App;