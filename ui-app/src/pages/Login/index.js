import React from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

export const Login = () => {
  return (
    <Container maxWidth="xl">
      <Grid container direction="row" spacing={10} sx={{ marginTop: "0%" }}>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={4} md={4}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  fontSize: 28,
                  fontWeight: 600,
                  justifyContent: "centre",
                }}
              >
                Login
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                Get access to your Orders. Wishlist and Recommendation:
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={6}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={12}>
              <FormControl variant="standard" sx={{ width: "50%", margin: 2 }}>
                <InputLabel htmlFor="component-simple">Email</InputLabel>
                <Input id="component-simple" value={""} onChange={() => {}} />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl variant="standard" sx={{ width: "50%", margin: 2 }}>
                <InputLabel htmlFor="component-simple">Password</InputLabel>
                <Input id="component-simple" value={""} onChange={() => {}} />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                variant="contained"
                sx={{
                  width: "50%",
                  margin: 2,
                  fontFamily: "Dosis",
                  textTransform: "none",
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
