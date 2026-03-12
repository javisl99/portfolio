import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: ["content/**/*.mdx"],
  },
];

export default config;
