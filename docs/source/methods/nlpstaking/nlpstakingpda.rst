class NlpStakingPDA
-------------------
The `NlpStakingPDA` class provides methods to return Program Derived Addresses (PDAs) generated for various purposes within the NLP Staking program.

   Methods
   -------

   .. method:: getConfigPda()

      Returns a PDA for the program's config account.

      :returns: The PublicKey of the config PDA.
      :rtype: PublicKey

   .. method:: getNlpStakingAuthorityPda()

      Returns a PDA for the token accounts derived from the program.

      :returns: The PublicKey of the NLP staking authority PDA.
      :rtype: PublicKey

   .. method:: getUserAccPda(authority: PublicKey)

      Returns a PDA for a user's account based on their authority.

      :param authority: The public key of the user's authority.
      :type authority: PublicKey
      :returns: The PublicKey of the user's account PDA.
      :rtype: PublicKey

   .. method:: getPda(seeds: Array<Buffer | Uint8Array>)

      Returns a PDA based on the provided seed array.

      :param seeds: An array of Buffer or Uint8Array elements used as seeds for the PDA.
      :type seeds: Array<Buffer | Uint8Array>
      :returns: The PublicKey of the generated PDA.
      :rtype: PublicKey