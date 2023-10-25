import { Suspense, useEffect, useState } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import * as API from "../servises/api";
import css from "./Pages.module.css";

function Home() {
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


//   function isTabs() {
//     if (!tabs) return;
//     if (tabs.length === 0) return false;
//     if (tabs.length > 0) return true;
//   }

  //   if (isTabs()) {
  //     return (
  //       <>
  //         <nav>
  //           <ul className={css.navBar}>
  //             {tabs.map((tab) => (
  //               <NavLink key={tab.id} to={tab.path} className={css.link}>
  //                 {tab.title}
  //               </NavLink>
  //             ))}
  //           </ul>
  //         </nav>{" "}
  //         <Navigate to={tabs[0].path} />
  //       </>
  //     );
  //   }

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
      {/* {isTabs() && <Navigate to={tabs[0].path} />} */}
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Home;
