import { useLocation } from "react-router-dom";

const usePaths = () => {
  const path = useLocation();
  const paths = path.pathname.split("/");
  paths.splice(0, 1);

  return paths;
};

export default usePaths;
