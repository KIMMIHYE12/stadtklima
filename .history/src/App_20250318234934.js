import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sanssouci from "./pages/Sanssouci/Sanssouci";
import Sanssouci30 from "./pages/Sanssouci/Sanssouci30";
import Sanssouci50 from "./pages/Sanssouci/Sanssouci50";
import Sanssouci80 from "./pages/Sanssouci/Sanssouci80";
import Havel from "./pages/Havel/Havel";
import Havel30 from "./pages/Havel/Havel30";
import Havel50 from "./pages/Havel/Havel50";
import Havel80 from "./pages/Havel/Havel80";
import Pinchzoom from "./pages/Pinchzoom";

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />}></Route>
        <Route path='pinchzoom' element={<Pinchzoom />}></Route>
        <Route path='sanssouci'>
          <Route index element={<Sanssouci />}></Route>
          <Route path='30' element={<Sanssouci30 />}></Route>
          <Route path='50' element={<Sanssouci50 />}></Route>
          <Route path='80' element={<Sanssouci80 />}></Route>
        </Route>
        <Route path='havel'>
          <Route index element={<Havel />}></Route>
          <Route path='30' element={<Havel30 />}></Route>
          <Route path='50' element={<Havel50 />}></Route>
          <Route path='80' element={<Havel80 />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
