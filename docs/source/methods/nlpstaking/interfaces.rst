Interfaces
==========

NlpStakeReqParam
----------------
.. code-block:: typescript

  export interface NlpStakeReqParam {
    authority: PublicKey,
    amount: number
  }

NlpUnstakeReqParam
------------------
.. code-block:: typescript

  export interface NlpUnstakeReqParam {
    authority: PublicKey,
    amount: number
  }

NlpAdminFuncParam
-----------------
.. code-block:: typescript

  export interface NlpAdminFuncParam {
    authority: PublicKey,
    newOwner?: PublicKey,
    newAdmin?: PublicKey,
    pauseStaking?: boolean,
    pauseReward?: boolean,
    newTimestamp?: number,
    newDepositFee?: number,
    newFrequency?: number,
    newFeeAccount?: PublicKey,
    newNLPMint?: PublicKey
  }