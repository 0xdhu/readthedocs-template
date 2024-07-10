import SbrSolSDK, { UserAccountData } from "sbrsol-sdk";

const sdk = SbrSolSDK.load({
  cluster,
  provider
});

const getUserData = async (authority: PublicKey): Promise<UserAccountData> => {
  const state = sdk.sbrSolState;

  return await state.getUserAccountData(authority);
}

getUserData();