import nextra from "nextra";

const withNextra = nextra({
  // Nextra options
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  search: {
    codeblocks: false,
  },
});

export default withNextra({
  // Next.js options
  reactStrictMode: true,
  basePath: "",
  assetPrefix: "",
});
