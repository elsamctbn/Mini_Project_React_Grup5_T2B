import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Elsa from "./pages/Elsa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Elsa />} />
        <Route path="/elsa" element={<Elsa />} />
      </Routes>
    </Router>
  );
}

export default App;