import SbrSolSDK from "sbrsol-sdk";

const sdk = SbrSolSDK.load({
  cluster,
  provider
});

const { sbrSolPda, sbrSolState, sbrSolCBS, sbrSolPSM, sbrSolAdmin } = sdk;

const { getConfigPda } = sbrSolPda;
const { buildDepositCollateralInstruction } = sbrSolCBS;
