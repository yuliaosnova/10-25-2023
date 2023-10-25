import { Suspense, useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import * as API from "../../servises/api";
import css from "../../pages/Pages.module.css";

export const Layout = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    API.fetchData()
      .then((response) => {
        console.log(response.data);
        setTabs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
