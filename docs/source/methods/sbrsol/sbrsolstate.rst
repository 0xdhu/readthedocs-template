class SbrSolState
-----------------
The `SbrSolState` class provides methods to fetch data from various accounts within the SbrSol program.

  Methods
  -------

  .. method:: getConfigData()

    Fetches and returns the configuration data from the program's config account.

    :returns: The configuration data.
    :rtype: ConfigData

  .. method:: getStabilityFeeData()

    Fetches and returns the stabilityFee config data from the program's stabilityFee account.

    :returns: The stabilityFee config data.
    :rtype: StabilityFeeData

  .. method:: getUserAccountData(authority)

    Fetches and returns the userAccount data for the specified authority.

    :param PublicKey authority: The user's wallet address.
    :returns: The user's account data.
    :rtype: UserAccountData

  .. method:: getCTokenAccountData()

    Fetches and returns the data from the program's collateralTokenAccount having collateral tokens information.

    :returns: The collateralTokenAccount data.
    :rtype: CTokenInfoAccountsData

  .. method:: getTrvcAccountData()

    Fetches and returns the TRVC account data from the program's TRVC account.

    :returns: The TRVC account data.
    :rtype: TypelessRepaymentVaultData

  .. method:: getAllUsersData()

    Fetches and returns the data for all user accounts in the program.

    :returns: A list of user account data.
    :rtype: List[UserAccountData]

  .. method:: fetchTotalCollateralValue(params)

    Calculates and returns the total collateral value deposited by all users.

    :param fetchTotalSupplyParams params: The parameters used to fetch and calculate the total collateral value.
    :returns: The total collateral value data.
    :rtype: TokenSupplyData

  .. method:: fetchTotalBorrowedValue(configData)

    Calculates and returns the total volume of sbrSOL borrowed by users.

    :param ConfigData configData: The config account data.
    :returns: The total borrowed sbrSOL volume.
    :rtype: float

  .. method:: fetchCBSInfo()

    Fetches and returns the CBS information, including LTV, TVL, total borrowed value, total supply value, and each supply values.

    :returns: A dictionary containing CBS information. (ltv, tvl, totalBorrowedValue, totalSupplyValue, eachSupplyValuess)
    :rtype: dict 

  .. method:: getUserBorrowedSbrSOLAmount(userAccData, stabilityFeeData)

    Calculates and returns the user's borrowed sbrSOL amount based on the provided user account data and stability fee data.

    :param UserAccountData userAccData: The user account data.
    :param StabilityFeeData stabilityFeeData: The stabilityFee account data.
    :returns: The user's borrowed sbrSOL amount.
    :rtype: float

  .. method:: fetchUserInfo(authority)

    Fetches and returns the user's information in CBS, including LTV, TVL, liquidation threshold, user loaned amount, user loaned value, user total deposited value, each supply values, user total borrowable value, and max borrowable amount.

    :param PublicKey authority: The authority's public key.
    :returns: A dictionary containing the user's information. (ltv, tvl, liquidationThreshold, userLoanedAmount, userLoanedValue, userTotalDepositedValue, eachSupplyValues, userTotalBorrowableValue, maxBorrowableAmountt)
    :rtype: dict 

  .. method:: getUserMaxWithdrawableAmount(mint, userData, ctokenAccData, userTotalBorrowableValue, userLoanedValue)

    Calculates and returns the user's maximum withdrawable amount based on the provided parameters.

    :param PublicKey mint: The mint public key.
    :param UserAccountData userData: The user account data.
    :param CTokenInfoAccountsData ctokenAccData: The collateral token account data.
    :param float userTotalBorrowableValue: The user's total borrowable value.
    :param float userLoanedValue: The user's loaned value.
    :returns: The user's maximum withdrawable amount.
    :rtype: float

  .. method:: getUserMaxDepositableAmount(authority, mint, userData, ctokenAccData)

    Calculates and returns the user's maximum depositable amount for the specific mint in CBS.

    :param PublicKey authority: The authority's public key.
    :param PublicKey mint: The mint public key.
    :param UserAccountData userData: The user account data.
    :param CTokenInfoAccountsData ctokenAccData: The collateral token account data.
    :returns: The user's maximum depositable amount.
    :rtype: float

  .. method:: getUserMaxRepayableAmount(authority, userLoanedAmount)

    Calculates and returns the user's maximum repayable amount for the specific mint in CBS.

    :param PublicKey authority: The authority's public key.
    :param str userLoanedAmount: The user's loaned amount.
    :returns: The user's maximum repayable amount.
    :rtype: float

  .. method:: getPSMSwapMaxInputAmount(authority, inMint)

    Calculates and returns the maximum input amount for a PSM swap from the specific mint to sbrSOL mint.

    :param PublicKey authority: The authority's public key.
    :param PublicKey inMint: The input mint public key.
    :returns: The maximum input amount for the PSM swap.
    :rtype: float

  .. method:: getPSMSwapRate(params)

    Calculates and returns the swap rate for a PSM swap based on the specific mint.

    :param PSMSwapRateReqParams params: The parameters used to calculate the swap rate.
    :returns: A dictionary containing the fee amount and output amount.
    :rtype: dict

  .. method:: fetchTreasuryInfo()

    Fetches and returns the treasury information, including total mSOL balance, total mSOL value, total sbrSOL balance, total sbrSOL value, total supply volume, and total borrow volume.

    :returns: A dictionary containing the treasury information.
    :rtype: dict
