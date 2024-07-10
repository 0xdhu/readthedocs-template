import SbrSolSDK from "sbrsol-sdk";

const sdk = SbrSolSDK.load({
  cluster,
  provider
});

const { sbrsol, nlpstaking } = sdk;
