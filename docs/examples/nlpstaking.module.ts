import SbrSolSDK from "sbrsol-sdk";

const sdk = SbrSolSDK.load({
  cluster,
  provider
});

const { nlpstaking, nlpstakingPda, nlpstakingState } = sdk;
