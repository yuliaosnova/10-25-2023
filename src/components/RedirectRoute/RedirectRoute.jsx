import { Navigate } from "react-router-dom";
import { useData } from "../Context/Context";

const RedirectRoute = ({ component: Component }) => {
  const { tabs } = useData();

  return tabs.length ? <Navigate to={tabs[0].path} /> : <Component />;
};

export default RedirectRoute;
