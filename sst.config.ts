/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "remo-monorepo",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          version: "6.41.0"
        }
      },
    };
  },
  async run() {
    new sst.aws.SvelteKit("remo-frontend", {
      path: "packages/frontend/",
      // domain: {
      //   name: "re.mo",
      //   redirects: ["www.re.mo"]
      // }
    });
  },
});
