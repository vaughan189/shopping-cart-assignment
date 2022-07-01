import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";
import {
  emailRegexPattern,
  passwordRegexPattern,
} from "../../constants/validation";
import { useHistory } from "react-router-dom";

export const Login = () => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    history.push("/home");
  };

  return (
    <Container maxWidth="xl">
      <Grid container direction="row" spacing={10} sx={{ marginTop: "0%" }}>
        <Grid item xs="auto" sm="auto" md={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={12} md={12} xl={12}>
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
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                Get access to your Orders. Wishlist and Recommendation
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <FormControl
                variant="standard"
                sx={{
                  width: { xl: "100%", md: "100%", sm: "90%", xs: "90%" },
                  margin: 2,
                }}
              >
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: emailRegexPattern,
                  })}
                />
                {errors.email && (
                  <FormHelperText
                    id="component-error-text"
                    sx={{ color: "red" }}
                  >
                    Please enter a valid email
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <FormControl
                variant="standard"
                sx={{
                  width: { xl: "100%", md: "100%", sm: "90%", xs: "90%" },
                  margin: 2,
                }}
              >
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: passwordRegexPattern,
                  })}
                />
                {errors.password && (
                  <FormHelperText
                    id="component-error-text"
                    sx={{ color: "red" }}
                  >
                    Please enter a valid password
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                variant="contained"
                sx={{
                  width: { xl: "100%", md: "100%", sm: "90%", xs: "90%" },
                  margin: 2,
                  fontFamily: "Dosis",
                  textTransform: "none",
                }}
                onClick={handleSubmit(onSubmit)}
                disabled={errors.email || errors.password}
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
