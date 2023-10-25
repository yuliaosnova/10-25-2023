import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";
import RedirectRoute from "./RedirectRoute/RedirectRoute";

const Home = lazy(() => import("../pages/Home"));
const DummyChart = lazy(() => import("../pages/DummyChart"));
const DummyList = lazy(() => import("../pages/DummyList"));
const DummyTable = lazy(() => import("../pages/DummyTable"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RedirectRoute component={Home} />} />
          <Route path="/dummyTable" element={<DummyTable />} />
          <Route path="/dummyChart" element={<DummyChart />} />
          <Route path="/dummyList" element={<DummyList />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
