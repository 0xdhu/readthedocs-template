class NlpstakingInstruction
---------------------------
The `NlpstakingInstruction` class provides methods to create various transaction instructions for staking, unstaking, and managing NLP tokens within the NLP staking program.

   Methods
   -------

   .. method:: stakeNLPInstruction(params: NlpStakeReqParam)

      Creates instructions to stake NLP tokens.

      :param params: Parameters required for staking.
      :type params: NlpStakeReqParam
      :returns: An array of transaction instructions.
      :rtype: Promise[TransactionInstruction[]]

   .. method:: unstakeNLPInstruction(params: NlpUnstakeReqParam)

      Creates instructions to unstake NLP tokens.

      :param params: Parameters required for unstaking.
      :type params: NlpUnstakeReqParam
      :returns: An array of transaction instructions.
      :rtype: Promise[TransactionInstruction[]]

   .. method:: withdrwaOldNLPTokensInstruction(authority: PublicKey)

      Creates instructions to withdraw old NLP tokens.

      :param authority: The public key of the user's authority.
      :type authority: PublicKey
      :returns: An array of transaction instructions or undefined if the account does not exist.
      :rtype: Promise[TransactionInstruction[] | undefined]

   .. method:: withdrawRewardInstruction(authority: PublicKey)

      Creates instructions to withdraw reward tokens.

      :param authority: The public key of the user's authority.
      :type authority: PublicKey
      :returns: An array of transaction instructions or undefined if the account does not exist.
      :rtype: Promise[TransactionInstruction[] | undefined]

   .. method:: closeStakerAccountInstruction(authority: PublicKey)

      Creates instructions to close a staker account.

      :param authority: The public key of the user's authority.
      :type authority: PublicKey
      :returns: A transaction instruction or undefined if the account does not exist.
      :rtype: Promise[TransactionInstruction | undefined]

   .. method:: getPendingRewardAmount(new_reward_rate: number, prev_reward_rate: number, current_deposited_balance: number)

      Calculates the pending reward amount based on the reward rates and the current deposited balance.

      :param new_reward_rate: The new reward rate.
      :type new_reward_rate: number
      :param prev_reward_rate: The previous reward rate.
      :type prev_reward_rate: number
      :param current_deposited_balance: The current deposited balance.
      :type current_deposited_balance: number
      :returns: The calculated pending reward amount.
      :rtype: number

   .. method:: updateNLPSetting(params: NlpAdminFuncParam)

      Creates instructions to update the settings of the NLP staking program.

      :param params: Parameters required for updating the settings.
      :type params: NlpAdminFuncParam
      :returns: An array of transaction instructions or undefined if no updates are made.
      :rtype: Promise[TransactionInstruction[] | undefined]