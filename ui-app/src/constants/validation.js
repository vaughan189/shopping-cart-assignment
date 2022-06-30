export const emailRegexPattern = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const passwordRegexPattern = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
);
