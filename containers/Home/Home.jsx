import React from "react";
import { Box, Grid } from "@material-ui/core";

import Header from "../../components/Header/Header.component";
import Navigation from "../../components/Navigation/Navigation.component";

import Layout from "../../hoc/Layout/Layout.container";

const Home = (props) => {
  return (
    <Layout>
      <Navigation />
      <Header />
    </Layout>
  );
};

export default Home;
