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
import { useHistory } from "react-router-dom";
import { loginConfiguration } from "../../configuration/Login/index";

const Login = () => {
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
            {loginConfiguration.map((config) => {
              return (
                <Grid item xs={12} sm={12} md={12} xl={12} key={config.id}>
                  <FormControl
                    variant="standard"
                    sx={{
                      width: { xl: "100%", md: "100%", sm: "90%", xs: "90%" },
                      margin: 2,
                    }}
                  >
                    <InputLabel htmlFor={config.id}>{config.label}</InputLabel>
                    <Input
                      id={config.id}
                      name={config.name}
                      type={config.type}
                      {...register(config.validation.name, {
                        ...(config.validation.required && {
                          required: config.validation.required,
                        }),
                        ...(config.validation.pattern && {
                          pattern: config.validation.pattern,
                        }),
                      })}
                    />
                    {errors[config.error.name] && (
                      <FormHelperText
                        id={config.error.id}
                        sx={{ color: "red" }}
                      >
                        {config.error.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              );
            })}
            <Grid item xs={12} md={12}>
              <Button
                id="login-btn"
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

export default Login;
