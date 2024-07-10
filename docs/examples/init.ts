import SbrSolSDK, { UserAccountData } from "sbrsol-sdk";
import { SignerWallet, SolanaProvider } from '@saberhq/solana-contrib';
import { Keypair, Connection, PublicKey } from '@solana/web3.js';

const cluster = 'devnet';
const connection = new Connection("https://api.devnet.solana.com");
const randomSigner = new SignerWallet(Keypair.generate())
const provider = SolanaProvider.init({
  connection,
  wallet: randomSigner,
})

const getUserData = async (authority: PublicKey): Promise<UserAccountData> => {

  const sdk = SbrSolSDK.load({
    cluster,
    provider
  });
  const state = sdk.sbrSolState;

  return await state.getUserAccountData(authority);
}