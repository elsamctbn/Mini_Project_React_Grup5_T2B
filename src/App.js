import { Routes, Route } from "react-router-dom";
import Elsa from "./pages/Elsa";
import Fia from "./pages/Fia";

function App() {
  return (
    <Routes>
      <Route path="/elsa" element={<Elsa />} />
      <Route path="/fia" element={<Fia />} />
    </Routes>
  );
}

export default App;