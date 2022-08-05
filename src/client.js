import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "1i41jkhj",
  dataset: "production",
  apiVersion: "2022-08-05", // use current UTC date - see "specifying API version"!
  token: "", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
