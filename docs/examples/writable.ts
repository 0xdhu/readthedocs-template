import SbrSolSDK, { DepositCollateralParams } from "sbrsol-sdk";
import type { TransactionEnvelope } from '@saberhq/solana-contrib';
import { Connection } from '@solana/web3.js';

const connection = new Connection("https://api.devnet.solana.com");

const sdk = SbrSolSDK.load({
  cluster,
  provider
});

const depositCollateral = async (params: DepositCollateralParams): Promise<string> => {
  // module
  const cbs = sdk.sbrSolCBS;

  // signer's pubkey for transaction
  const authority = params.authority;

  // array of TransactionInstruction for deposit
  const instructions = await cbs.buildDepositCollateralInstruction(params);
  // wrap with TransactionEnvelope
  const txEnv: TransactionEnvelope = sdk.newTx(instructions);
  // build versioned transaction
  const vt = await sdk.createVersionedTransaction(
    connection,
    txEnv.instructions,
    authority,
  );

  const hash = await connection.sendTransaction(vt.transaction, connection);
  await connection.confirmTransaction({ signature: hash, ...vt.latestBlockhash }, 'processed');
  return hash;
}

depositCollateral();