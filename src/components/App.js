import { Routes, Route } from "react-router-dom";

import { MainRoute } from "./routes/MainRoute";
import { ServiceRoute } from "./routes/ServiceRoute";
import { ShopRoute } from "./routes/ShopRoute";
import { LocationRoute } from "./routes/LocationRoute";
import { BlogRoute } from "./routes/BlogRoute";

import "./App.scss";
import "./assests/fonts/index.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainRoute />} />
        <Route path="/service" element={<ServiceRoute />} />
        <Route path="/shop" element={<ShopRoute />} />
        <Route path="/location" element={<LocationRoute />} />
        <Route path="/blog" element={<BlogRoute />} />
      </Routes>
    </>
  );
}

export default App;
