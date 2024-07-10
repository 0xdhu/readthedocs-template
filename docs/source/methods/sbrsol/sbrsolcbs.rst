class SbrSolCBS
--------------
The `SbrSolCBS` class handles various operations related to CBS in SbrSol program.

    Methods
    -------

    .. method:: deleteUserAccountInstruction(authority: PublicKey)
    
        Builds a transaction instruction to delete a user account.

        :param authority: The public key of the account authority.
        :type authority: PublicKey
        :return: The instruction to delete the user account.
        :rtype: Promise<TransactionInstruction>

    .. method:: buildDepositCollateralInstruction(params: DepositCollateralParams)
    
        Builds instructions for depositing collateral tokens on SbrSol program.

        :param params: Parameters for depositing collateral.
        :type params: DepositCollateralParams
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: buildWithdrawCollateralInstruction(params: WithdrawCollateralParams)
    
        Builds instructions for withdrawing collateral tokens on SbrSol program.

        :param params: Parameters for withdrawing collateral.
        :type params: WithdrawCollateralParams
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: buildBorrowSbrSOLInstrunction(params: BorrowSbrSOLParams)
    
        Builds instructions for borrowing SbrSOL after depositing collaterals.

        :param params: Parameters for borrowing SbrSOL.
        :type params: BorrowSbrSOLParams
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: buildRepaySbrSOLInstrunction(params: RepaySbrSOLParams)
    
        Builds instructions for repaying SbrSOL.

        :param params: Parameters for repaying SbrSOL.
        :type params: RepaySbrSOLParams
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: buildClaimRedeemQuarryRewardsInstruction(params: ClaimRedeemQuarryRewardParam)
    
        Builds instructions for claiming and redeeming Quarry rewards.

        :param params: Parameters for claiming and redeeming Quarry rewards.
        :type params: ClaimRedeemQuarryRewardParam
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: createUserAccountInstruction(authority: PublicKey)
    
        Creates a user account instruction if it doesn't already exist.

        :param authority: The public key of the account authority.
        :type authority: PublicKey
        :return: The instruction to create the user account, or null if it already exists.
        :rtype: Promise<TransactionInstruction | null>

    .. method:: depositTokenInstruction(params: DepositCollateralParams)
    
        Builds instructions for depositing a token collateral.

        :param params: Parameters for depositing token collateral.
        :type params: DepositCollateralParams
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: depositSOLInstruction(params: DepositCollateralParams)
    
        Builds instructions for depositing SOL collateral.

        :param params: Parameters for depositing SOL collateral.
        :type params: DepositCollateralParams
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: stakeTokenInQuarryInstruction(params: DepositCollateralParams)
    
        Builds instructions for staking a token in Quarry.

        :param params: Parameters for depositing collateral.
        :type params: DepositCollateralParams
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: createQuarryMinerInstruction(params: DepositCollateralParams)
    
        Builds instructions for creating a Quarry miner.

        :param params: Parameters for depositing collateral.
        :type params: DepositCollateralParams
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: withdrawSOLInstruction(params: WithdrawCollateralParams)
    
        Builds an instruction for withdrawing SOL collateral.

        :param params: Parameters for withdrawing collateral.
        :type params: WithdrawCollateralParams
        :return: The transaction instruction.
        :rtype: Promise<TransactionInstruction>

    .. method:: withdrawMSOLInstruction(params: WithdrawCollateralParams)
    
        Builds an instruction for withdrawing MSOL collateral.

        :param params: Parameters for withdrawing collateral.
        :type params: WithdrawCollateralParams
        :return: The transaction instruction.
        :rtype: Promise<TransactionInstruction>

    .. method:: withdrawTokenInstruction(params: WithdrawCollateralParams)
    
        Builds instructions for withdrawing token collateral.

        :param params: Parameters for withdrawing collateral.
        :type params: WithdrawCollateralParams
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: unstakeTokenFromQuarryInstruction(params: WithdrawCollateralParams)
    
        Builds an instruction for unstaking a token from Quarry.

        :param params: Parameters for withdrawing collateral.
        :type params: WithdrawCollateralParams
        :return: The transaction instruction.
        :rtype: Promise<TransactionInstruction>

    .. method:: createUserAccountInstruction(authority: PublicKey)
    
        Creates a user account instruction if it doesn't already exist.

        :param authority: The public key of the account authority.
        :type authority: PublicKey
        :return: The instruction to create the user account, or null if it already exists.
        :rtype: Promise<TransactionInstruction | null>

    .. method:: claimQuarryRewards(params: ClaimRedeemQuarryRewardParam)
    
        Builds instructions for claiming Quarry rewards.

        :param params: Parameters for claiming Quarry rewards.
        :type params: ClaimRedeemQuarryRewardParam
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>

    .. method:: redeemQuarryRewards(params: ClaimRedeemQuarryRewardParam)
    
        Builds instructions for redeeming Quarry rewards.

        :param params: Parameters for redeeming Quarry rewards.
        :type params: ClaimRedeemQuarryRewardParam
        :return: An array of transaction instructions.
        :rtype: Promise<TransactionInstruction[]>