import { useData } from "../components/Context/Context";

import css from "./Pages.module.css";

function Home() {
  const { tabs } = useData();

  return <div className={css.container}>Home page</div>;
}

export default Home;
