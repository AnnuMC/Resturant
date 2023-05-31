import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "center",
            padding : 1
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">About Little Lemon</Typography>
        <p>
        "At Little Lemon, we believe the best dishes are the ones that remind you of childhood.
         A portion of great food should make you feel like you are wrapped in a warm blanket.
         </p><p>At our location in Boston or online, you will find the best dishes you didn't know you craved: extra-creamy mac and cheese, hot chicken casserole, fried dumplings like your mama makes, and many more.
         </p><p>Forget about the daily stress and come relax with us. After tasting any of our menu items, you will never want to leave!"
        </p>
        <br />
      </Box>
    </Layout>
  );
};

export default About;
