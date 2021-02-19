import clsx from "clsx";

// Copied from https://github.com/vigour-io/nice-is-email/blob/master/lib/index.js
const EMAIL_PATTERN = /^([^.](?![a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+\.\.)([a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~.]+[^.])|([a-zA-Z0-9]{1,2}))@([A-Za-z0-9-]{1,64}\.){1,10}[a-zA-Z]{2,64}$/;

const isEmail = (value) => {
  return (
    typeof value === "string" &&
    EMAIL_PATTERN.test(value) &&
    value.indexOf("@") < 65 &&
    value.length < 255
  );
};

const widont = (str) => {
  // Find the last word in a string with a space before it
  const REGEX = /\s((?=(([^\s<>]|<[^>]*>)+))\2)\s*$/;
  // Replace the space with &nbsp;
  return str.replace(REGEX, "\u00A0$1");
};

export { clsx as cx, isEmail, widont };
