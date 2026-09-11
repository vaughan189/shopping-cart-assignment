export const emailRegexPattern = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const passwordRegexPattern = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
);
