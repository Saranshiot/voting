import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "calc(100vh - 128px)",
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              margin: "3rem 1rem",
            }}
            variant="h3"
            component="div"
            gutterBottom
          >
            Welcome to the Voting App
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6}>
              <img
                style={{ width: "100%", height: "auto" }}
                src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/10/16044143/M187_Digital-voting-header.png"
                alt="random"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                style={{
                  margin: "10px 20px",
                  padding: "auto",
                  fontWeight: "bold",
                }}
                variant="h5"
                component="div"
                gutterBottom
              >
                Welcome to the Voting App.
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                This is a simple voting app made using React.js, Node.js,
                Express.js, MongoDB, and Mongoose. The special feature of this
                app is that it uses blockchain technology to store the votes.
              </Typography>
              <Typography
                style={{
                  margin: "10px 20px",
                  fontWeight: "bold",
                }}
                variant="h5"
                component="div"
                gutterBottom
              >
                Other features include:
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                - It also uses a simple authentication system to prevent
                multiple votes from the same user.
                <br />- Admin dashboard to create and delete polls.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </main>
    </ThemeProvider>
  );
}
