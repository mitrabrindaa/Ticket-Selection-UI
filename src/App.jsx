import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import Tickets from "./pages/Tickets";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Event />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;