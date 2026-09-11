import {
  emailRegexPattern,
  passwordRegexPattern,
} from "../../constants/validation";

export const loginConfiguration = [
  {
    id: "email-field",
    label:"Email",
    name: "email-field",
    type: "text",
    validation: {
      name: "email",
      required: true,
      pattern: emailRegexPattern,
    },
    error: {
      id: "email-error-text",
      name: "email",
      message: "Please enter a valid email",
    },
  },
  {
    id: "password-field",
    label:"Password",
    name: "password-field",
    type: "password",
    validation: {
      name: "password",
      required: true,
      minLength: 6,
      pattern: passwordRegexPattern,
    },
    error: {
      id: "password-error-text",
      name: "password",
      message: "Please enter a valid password",
    },
  },
];
