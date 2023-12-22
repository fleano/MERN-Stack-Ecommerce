import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { SHOP_NAME } from "../../constants/common-constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 0",
            }}
          >
            <Typography variant="body1">
              {SHOP_NAME} &copy; {currentYear}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
