import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Dashboard from "./pages/dashboard";
import Information from "./pages/information";

function App() {
  return (
    <BrowserRouter>
 
    <div className="App">
<Navbar />
<Routes>
<Route path="/" element={<Dashboard />}/> 
<Route path="/information" element={<Information />}/> 
</Routes>
    </div>
 
    </BrowserRouter>

  );
}

export default App;
