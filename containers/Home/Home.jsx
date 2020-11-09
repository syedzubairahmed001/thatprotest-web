import React from "react";
import { Box, Grid, Button, TextField } from "@material-ui/core";

import Header from "../../components/Header/Header.component";
import Navigation from "../../components/Navigation/Navigation.component";
import Layout from "../../hoc/Layout/Layout.container";
import AuthModal from "../../components/Auth/AuthModal.component";

const Home = (props) => {
  const [authOpen, setAuthOpen] = React.useState(false);

  const onAuthClose = () => {
    setAuthOpen(false);
  };

  return (
    <Layout>
      <Navigation />
      <Header />
      <AuthModal isOpen={authOpen} onClose={onAuthClose} />
      <TextField
        label="Email"
        fullWidth
        variant="outlined"
        name="email"
        type="email"
        helperText={"hello world"}
      />
    </Layout>
  );
};

export default Home;
