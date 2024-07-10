Interfaces
==========

.. _fetchTotalSupplyParams:

fetchTotalSupplyParams
----------------------
.. code-block:: typescript

  interface fetchTotalSupplyParams {
    depositData: ConfigData | UserAccountData,
    cTokenInfoList: CTokenInfo[],
    trvcMsolAmount: BN | number,
    msolSOLRate: number
  }

.. _CTokenSupply:

CTokenSupply
------------
.. code-block:: typescript

  interface CTokenSupply {
    idx: number,
    value: number,
    amount: number,
    symbol: string,
  }

.. _TokenSupplyData:

TokenSupplyData
---------------
.. code-block:: typescript

  interface TokenSupplyData {
    totalSupplyValue: number,
    totalBorrowableValue: number,
    eachSupplyValues: CTokenSupply[]
  }

.. _PSMSwapRateReqParams:

PSMSwapRateReqParams
--------------------
.. code-block:: typescript

  interface PSMSwapRateReqParams {
    authority: PublicKey,
    inMint: PublicKey,
    outMint: PublicKey,
    inAmount: number
  }

.. _DepositCollateralParams:

DepositCollateralParams
-----------------------
.. code-block:: typescript

  interface DepositCollateralParams {
    mint: PublicKey,
    authority: PublicKey,
    amount: string | number
  }

.. _WithdrawCollateralParams:

WithdrawCollateralParams
------------------------
.. code-block:: typescript

  interface WithdrawCollateralParams {
    mint: PublicKey,
    authority: PublicKey,
    amount: string | number,
    isMax: boolean,
  }

.. _BorrowSbrSOLParams:

BorrowSbrSOLParams
------------------
.. code-block:: typescript

  interface BorrowSbrSOLParams {
    mint: PublicKey,
    authority: PublicKey,
    amount: string | number,
    isMax: boolean,
  }

.. _RepaySbrSOLParams:

RepaySbrSOLParams
-----------------
.. code-block:: typescript

  interface RepaySbrSOLParams {
    mint: PublicKey,
    authority: PublicKey,
    amount: string | number,
    isMax: boolean,
  }

.. _ClaimRedeemQuarryRewardParam:

ClaimRedeemQuarryRewardParam
----------------------------
.. code-block:: typescript

  interface ClaimRedeemQuarryRewardParam {
    authority: PublicKey,
    mint: PublicKey,
    iouMint: PublicKey,
    redemptionMint: PublicKey
  }

.. _PsmMintSbrSOLParams:

PsmMintSbrSOLParams
-------------------
.. code-block:: typescript

  interface PsmMintSbrSOLParams {
    mint: PublicKey,
    authority: PublicKey,
    amount: string | number
  }

.. _PsmBurnSbrSOLParams:

PsmBurnSbrSOLParams
-------------------
.. code-block:: typescript

  interface PsmBurnSbrSOLParams {
    mint: PublicKey,
    authority: PublicKey,
    amount: string | number
  }

.. _AdminDepositTrvcParams:

AdminDepositTrvcParams
----------------------
.. code-block:: typescript

  interface AdminDepositTrvcParams {
    mint: PublicKey,
    authority: PublicKey,
    amount: string | number
  }

.. _AdminBorrowSbrSOLOnTrvcParams:

AdminBorrowSbrSOLOnTrvcParams
------------------------------
.. code-block:: typescript

  interface AdminBorrowSbrSOLOnTrvcParams {
    mint: PublicKey,
    authority: PublicKey,
    amount: string | number
  }

.. _AdminWithdrawCollateralOnTrvcParams:

AdminWithdrawCollateralOnTrvcParams
-----------------------------------
.. code-block:: typescript

  interface AdminWithdrawCollateralOnTrvcParams {
    mint: PublicKey,
    authority: PublicKey,
    amount: string | number
  }

.. _AdminRepaySbrSOLOnTrvcParams:

AdminRepaySbrSOLOnTrvcParams
----------------------------
.. code-block:: typescript

  interface AdminRepaySbrSOLOnTrvcParams {
    authority: PublicKey,
    amount: string | number
  }

.. _AdminClaimRedeemQuarryRewardParams:

AdminClaimRedeemQuarryRewardParams
----------------------------------
.. code-block:: typescript

  interface AdminClaimRedeemQuarryRewardParams {
    mint: PublicKey,
    iouMint: PublicKey,
    redemptionMint: PublicKey,
    authority: PublicKey,
  }

.. _CreateTrvcMinerParams:

CreateTrvcMinerParams
----------------------
.. code-block:: typescript

  interface CreateTrvcMinerParams {
    mint: PublicKey,
    authority: PublicKey,
  }

.. _UpdateFeeAccountParams:

UpdateFeeAccountParams
----------------------
.. code-block:: typescript

  interface UpdateFeeAccountParams {
    authority: PublicKey,
    newFeeWallet: PublicKey,
    tokenList: Array<PublicKey>
  }

.. _UpdateCollateralTokenInfoParam:

UpdateCollateralTokenInfoParam
------------------------------
.. code-block:: typescript

  interface UpdateCollateralTokenInfoParam {
    authority: PublicKey,
    mint: PublicKey,
    newMint?: PublicKey,
    oracleAccount?: PublicKey,
    maxBorrowLTV?: number,
    maxLiquidateLTV?: number,
    depositCap?: number,
    priceRestriction?: number,
    isLive?: boolean
  }

.. _UpdateFeeValue:

UpdateFeeValue
--------------
.. code-block:: typescript

  interface UpdateFeeValue {
    authority: PublicKey,
    fee: number
  }

.. _CBSPauseParam:

CBSPauseParam
-------------
.. code-block:: typescript

  interface CBSPauseParam {
    authority: PublicKey,
    option: number,
    isPaused: boolean
  }

.. _TrvcPauseParam:

TrvcPauseParam
--------------
.. code-block:: typescript

  interface TrvcPauseParam {
    authority: PublicKey,
    option: number,
    isPaused: boolean
  }

.. _TransferOwnershipParams:

TransferOwnershipParams
------------------------
.. code-block:: typescript

  interface TransferOwnershipParams {
    authority: PublicKey,
    newAuthority: PublicKey
  }

.. _UpdateStabilityAdminFeeParams:

UpdateStabilityAdminFeeParams
-----------------------------
.. code-block:: typescript

  interface UpdateStabilityAdminFeeParams {
    authority: PublicKey,
    nlpstakingAtaAuthority?: PublicKey,
    feePercent?: number,
    feeApr?: number,
    epochFrequency?: number,
  }