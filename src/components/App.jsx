import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

const DummyChart = lazy(() => import("../pages/DummyChart"));
const DummyList = lazy(() => import("../pages/DummyList"));
const DummyTable = lazy(() => import("../pages/DummyTable"));

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index path="tabs/dummyTable" element={<DummyTable />} />
            <Route path="tabs/dummyChart" element={<DummyChart />} />
            <Route path="tabs/dummyList" element={<DummyList />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
