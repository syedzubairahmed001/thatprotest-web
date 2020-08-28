import React from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
  },
}));

const Header = (props) => {
  const styles = useStyles();

  return (
    <Box p={3} mx={3} my={2} textAlign="center" className={styles.container}>
      <Box mb={1}>
        <Typography variant="h4" align="center">
          Whenever you see injustice, SPEAK UP!
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          We do not encourage spamming, treathening or any kind of violence
        </Typography>
      </Box>
      <Button color="primary" variant="contained">
        Start A Protest
      </Button>
    </Box>
  );
};

export default Header;
