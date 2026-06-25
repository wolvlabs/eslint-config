import globals from "globals";
import base from "./base.js";

export default [
  ...base,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
  },
];
