import SbrSolSDK from "sbrsol-sdk";
import { SignerWallet, SolanaProvider } from '@saberhq/solana-contrib';
import { Keypair, Connection } from '@solana/web3.js';

const cluster = 'devnet';
const connection = new Connection("https://api.devnet.solana.com");
const randomSigner = new SignerWallet(Keypair.generate())
const provider = SolanaProvider.init({
  connection,
  wallet: randomSigner,
})

const sdk = SbrSolSDK.load({
  cluster,
  provider
});
const { sbrSolState, sbrSolPda, sbrSolCBS, sbrSolPSM } = sdk;
