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

const Register = () => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    getValues,
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
                Signup
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
                We do not share your personal details with anyone
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
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input
                  id="firstName"
                  type="text"
                  {...register("firstName", {
                    required: true,
                  })}
                />
                {errors.firstName && (
                  <FormHelperText
                    id="component-error-text"
                    sx={{ color: "red" }}
                  >
                    Please enter a first Name
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
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input
                  id="lastName"
                  type="text"
                  {...register("lastName", {
                    required: true,
                  })}
                />
                {errors.lastName && (
                  <FormHelperText
                    id="component-error-text"
                    sx={{ color: "red" }}
                  >
                    Please enter a last name
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
                    Please enter a valid the email
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
                    required: "Please enter a valid password",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                    pattern: passwordRegexPattern,
                  })}
                />
                {errors.password && (
                  <FormHelperText
                    id="component-error-text"
                    sx={{ color: "red" }}
                  >
                    {errors.password.message}
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
                <InputLabel htmlFor="confirmPassword">
                  Confirm Password
                </InputLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please enter a valid password",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                    pattern: passwordRegexPattern,
                    validate: (value) => {
                      const { password } = getValues();
                      return (password === value) | "Passwords should match!";
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <FormHelperText
                    id="component-error-text"
                    sx={{ color: "red" }}
                  >
                    {errors.confirmPassword.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                id="submit-btn"
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

export default Register;
