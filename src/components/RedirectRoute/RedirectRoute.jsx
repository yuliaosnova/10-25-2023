import { Navigate } from "react-router-dom";

const RedirectRoute = ({
  component: Component,
  redirectTo = "tabs/dummyTable",
}) => {
  return bool ? <Navigate to={redirectTo} /> : <Component />;
};

export default RedirectRoute;
