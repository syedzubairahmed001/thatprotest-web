import React from "react";
import { Box, Grid } from "@material-ui/core";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const Home = (props) => {
  return (
    <div>
      <Navigation />
      <Header />
    </div>
  );
};

export default Home;
