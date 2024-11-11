import { Route, Routes } from "react-router-dom";
import { Detail, Home } from "../screens";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries-detail/:countryCode" element={<Detail />} />
    </Routes>
  );
};

export default Router;