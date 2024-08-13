export const frontend = new sst.aws.SvelteKit("remo-frontend", {
    path: "packages/frontend/",
    // domain: {
    //   name: "re.mo",
    //   redirects: ["www.re.mo"]
    // }
  });