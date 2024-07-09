import SbrSol from "sbrsol-sdk";
const sdk = SbrsolSDK.load({
  cluster,
  provider
});
const userAccountData = await sdk.sbrsolState.getUserAccountData(wallet_pub);