import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { useData } from "../Context/Context";

import css from "./Layout.module.css";

export const Layout = () => {
  const { tabs } = useData();

  return (
    <>
      <nav>
        <ul className={css.navBar}>
          {tabs.map((tab) => (
            <NavLink key={tab.id} to={tab.path} className={css.link}>
              {tab.title}
            </NavLink>
          ))}
        </ul>
      </nav>
      <main>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
