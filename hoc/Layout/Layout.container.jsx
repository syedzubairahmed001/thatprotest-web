import React from "react";
import { initGA, logPageView } from "../../helpers/googleAnalytics";

const Layout = (props) => {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
        logPageView();
      }
    }
  }, []);
  return <div>{props.children}</div>;
};

export default Layout;
