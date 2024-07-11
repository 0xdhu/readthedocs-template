class NlpstakingState
---------------------
The `NlpstakingState` class provides methods to interact with and retrieve data from the NLP staking program.

   Methods
   -------

   .. method:: getConfigData()

      Fetches and returns the configuration data for the NLP staking program.

      :returns: The configuration data.
      :rtype: Promise[NlpConfigData]

   .. method:: getUserAccountData(authority: PublicKey)

      Fetches and returns the user account data for the given authority.

      :param authority: The public key of the user's authority.
      :type authority: PublicKey
      :returns: The user account data or undefined if the account does not exist.
      :rtype: Promise[StakerAccountData | undefined]

   .. method:: fetchStakerInfo(authority: PublicKey)

      Fetches and returns the staker account information for the given authority, including the calculated reward amount.

      :param authority: The public key of the user's authority.
      :type authority: PublicKey
      :returns: The staker account information or undefined if the account does not exist.
      :rtype: Promise[StakerAccountInfo | undefined]

   .. method:: fetchAllStakers()

      Fetches and returns the account data for all stakers in the NLP staking program.

      :returns: An array of staker account data or undefined if no accounts exist.
      :rtype: Promise[StakerAccountData[] | undefined]