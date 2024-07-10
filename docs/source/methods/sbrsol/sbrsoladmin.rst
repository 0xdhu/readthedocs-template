class SbrSolAdmin 
-----------------

The `SbrSolAdmin` class provides methods to build transaction instructions for administering various aspects of the SbrSol program.

  Methods
  -------

  .. method:: buildUpdateFeeAccountInstruction(params: UpdateFeeAccountParams)

    Builds transaction instructions to update the fee account.

    :param params: Parameters for updating the fee account.
    :type params: UpdateFeeAccountParams
    :return: List of transaction instructions.
    :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildUpdateCollateralTokenInfoInstruction(params: UpdateCollateralTokenInfoParam)

      Builds transaction instructions to update collateral token information.

      :param params: Parameters for updating collateral token information.
      :type params: UpdateCollateralTokenInfoParam
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildUpdateTrvcSwapFeeInstruction(params: UpdateFeeValue)

      Builds transaction instructions to update TRVC swap fees.

      :param params: Parameters for updating TRVC swap fees.
      :type params: UpdateFeeValue
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildUpdateDepositFeeInstruction(params: UpdateFeeValue)

      Builds transaction instructions to update deposit fees.

      :param params: Parameters for updating deposit fees.
      :type params: UpdateFeeValue
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildPauseCBSInstruction(params: CBSPauseParam)

      Builds transaction instructions to pause the CBS program.

      :param params: Parameters for pausing the CBS program.
      :type params: CBSPauseParam
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildPauseTrvcInstruction(params: TrvcPauseParam)

      Builds transaction instructions to pause the TRVC program.

      :param params: Parameters for pausing the TRVC program.
      :type params: TrvcPauseParam
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildTransferOwnershipInstruction(params: TransferOwnershipParams)

      Builds transaction instructions to transfer ownership.

      :param params: Parameters for transferring ownership.
      :type params: TransferOwnershipParams
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildResetCBSInstruction(authority: PublicKey)

      Builds transaction instructions to reset the CBS program.

      :param authority: Public key of the authority.
      :type authority: PublicKey
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildResetTrvcInstruction(authority: PublicKey)

      Builds transaction instructions to reset the TRVC program.

      :param authority: Public key of the authority.
      :type authority: PublicKey
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildMigrateTrvcAccountSizeInstruction(authority: PublicKey)

      Builds transaction instructions to migrate TRVC account size.

      :param authority: Public key of the authority.
      :type authority: PublicKey
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>

  .. method:: buildUpdateStabilityAdminFeeInstruction(params: UpdateStabilityAdminFeeParams)

      Builds transaction instructions to update stability admin fees.

      :param params: Parameters for updating stability admin fees.
      :type params: UpdateStabilityAdminFeeParams
      :return: List of transaction instructions.
      :rtype: Promise<TransactionInstruction[] | undefined>