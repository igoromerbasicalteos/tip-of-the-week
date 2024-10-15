import React from "react";
import { type DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  // REVIEW: https://github.com/shuding/nextra/blob/main/docs/theme.config.tsx
  chat: {
    link: "https://discord.gg/hEM84NMkRv", // Next.js discord server,
  },
  editLink: {
    content: "Edit this page on GitHub",
  },
  // docsRepositoryBase: "https://tip-of-the-week.vercel.app",
  docsRepositoryBase: "http://localhost:3000",
  faviconGlyph: "✦",
  logo: (
    <span>
      <img
        src="https://cdn.prod.website-files.com/6581ca7dbd54f722ae153516/659a936655ab821f56acf70c_alteos-logo-light.svg"
        alt="ALTEOS"
      />{" "}
      Tip of the Week
    </span>
  ),
  project: {
    // link: "https://github.com/cbmono/tip-of-the-week",
    link: "http://localhost:3000",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
  footer: {
    content: <span>© 2024 by Alteos</span>,
  },
};

export default config;
