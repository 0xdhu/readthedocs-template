class SbrSolPSM
---------------
The `SbrSolPSM` class handles various operations related to PSM in SbrSol program.

  Methods
  -------

  .. method:: buildMintSbrSOLInstruction(params: PsmMintSbrSOLParams)

    Builds transaction instructions for minting SbrSOL.

    :param params: Parameters for minting SbrSOL.
    :type params: PsmMintSbrSOLParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>

  .. method:: buildBurnSbrSOLInstruction(params: PsmBurnSbrSOLParams)

    Builds transaction instructions for burning SbrSOL.

    :param params: Parameters for burning SbrSOL.
    :type params: PsmBurnSbrSOLParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>

  .. method:: buildAdminDepositOnTrvcInstruction(params: AdminDepositTrvcParams)

    Builds transaction instructions for admin depositing on TRVC.

    :param params: Parameters for admin deposit on TRVC.
    :type params: AdminDepositTrvcParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>

  .. method:: buildAdminBorrowSbrSOLOnTrvcInstruction(params: AdminBorrowSbrSOLOnTrvcParams)

    Builds transaction instructions for admin borrowing SbrSOL on TRVC.

    :param params: Parameters for admin borrowing SbrSOL on TRVC.
    :type params: AdminBorrowSbrSOLOnTrvcParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>

  .. method:: buildAdminWithdrawCollateralOnTrvcInstruction(params: AdminWithdrawCollateralOnTrvcParams)

    Builds transaction instructions for admin withdrawing collateral on TRVC.

    :param params: Parameters for admin withdrawing collateral on TRVC.
    :type params: AdminWithdrawCollateralOnTrvcParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>

  .. method:: buildAdminRepaySbrSOLFromTrvcInstruction(params: AdminRepaySbrSOLOnTrvcParams)

    Builds transaction instructions for admin repaying SbrSOL from TRVC.

    :param params: Parameters for admin repaying SbrSOL from TRVC.
    :type params: AdminRepaySbrSOLOnTrvcParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>

  .. method:: buildAdminClaimRedeemQuarryRewardsInstruction(params: AdminClaimRedeemQuarryRewardParams)

    Builds transaction instructions for admin claiming and redeeming quarry rewards.

    :param params: Parameters for admin claiming and redeeming quarry rewards.
    :type params: AdminClaimRedeemQuarryRewardParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>

  .. method:: mintSbrSOLInstruction(params: PsmMintSbrSOLParams)

    Builds a transaction instruction for minting SbrSOL.

    :param params: Parameters for minting SbrSOL.
    :type params: PsmMintSbrSOLParams
    :return: The transaction instruction.
    :rtype: Promise<TransactionInstruction>

  .. method:: depositTrvcInstruction(params: AdminDepositTrvcParams)

    Builds a transaction instruction for depositing TRVC.

    :param params: Parameters for depositing TRVC.
    :type params: AdminDepositTrvcParams
    :return: The transaction instruction.
    :rtype: Promise<TransactionInstruction>

  .. method:: borrowSbrSOLFromTrvcInstruction(params: AdminBorrowSbrSOLOnTrvcParams)

    Builds a transaction instruction for borrowing SbrSOL from TRVC.

    :param params: Parameters for borrowing SbrSOL from TRVC.
    :type params: AdminBorrowSbrSOLOnTrvcParams
    :return: The transaction instruction.
    :rtype: Promise<TransactionInstruction>

  .. method:: stakeTokenOnTrvcQuarryInstruction(params: PsmMintSbrSOLParams)

    Builds a transaction instruction for staking token on TRVC quarry.

    :param params: Parameters for staking token on TRVC quarry.
    :type params: PsmMintSbrSOLParams
    :return: The transaction instruction.
    :rtype: Promise<TransactionInstruction>

  .. method:: burnSbrSOLInstruction(params: PsmBurnSbrSOLParams)

    Builds a transaction instruction for burning SbrSOL.

    :param params: Parameters for burning SbrSOL.
    :type params: PsmBurnSbrSOLParams
    :return: The transaction instruction.
    :rtype: Promise<TransactionInstruction>

  .. method:: createTrvcMinerInstruction(params: createTrvcMinerParams)

    Builds transaction instructions for creating TRVC miner.

    :param params: Parameters for creating TRVC miner.
    :type params: createTrvcMinerParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>

  .. method:: unstakeTokenFromTrvcQuarryInstruction(params: PsmBurnSbrSOLParams)

    Builds a transaction instruction for unstaking token from TRVC quarry.

    :param params: Parameters for unstaking token from TRVC quarry.
    :type params: PsmBurnSbrSOLParams
    :return: The transaction instruction.
    :rtype: Promise<TransactionInstruction>

  .. method:: withdrawCollateralFromTrvcInstruction(params: AdminWithdrawCollateralOnTrvcParams)

    Builds a transaction instruction for withdrawing collateral from TRVC.

    :param params: Parameters for withdrawing collateral from TRVC.
    :type params: AdminWithdrawCollateralOnTrvcParams
    :return: The transaction instruction.
    :rtype: Promise<TransactionInstruction>

  .. method:: claimQuarryRewardInstruction(params: AdminClaimRedeemQuarryRewardParams)

    Builds transaction instructions for claiming quarry rewards.

    :param params: Parameters for claiming quarry rewards.
    :type params: AdminClaimRedeemQuarryRewardParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>

  .. method:: redeemQuarryRewardInstruction(params: AdminClaimRedeemQuarryRewardParams)

    Builds transaction instructions for redeeming quarry rewards.

    :param params: Parameters for redeeming quarry rewards.
    :type params: AdminClaimRedeemQuarryRewardParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[]>