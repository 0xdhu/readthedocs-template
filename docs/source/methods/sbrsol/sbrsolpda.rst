class SbrSolPDA
---------------
The `SbrSolPDA` class provides methods to generate Program Derived Addresses (PDAs) for various purposes within the SbrSol program.

   Methods
   -------

   .. method:: getConfigPda()

      Returns a PDA for the program's config account.

      :returns: The PublicKey of the config PDA.
      :rtype: PublicKey

   .. method:: getProgramPda()

      Returns a PDA for the token accounts derived from the program.

      :returns: The PublicKey of the program PDA.
      :rtype: PublicKey

   .. method:: getUserAccountPda(authority)

      Returns a PDA for a user's state account in the program.

      :param PublicKey authority: The user's wallet address.
      :returns: The PublicKey of the user's state PDA.
      :rtype: PublicKey
   
   .. method:: getStabilityFeePda()

      Returns a PDA for the stabilityFee account in the program.

      :returns: The PublicKey of the stabilityFee PDA.
      :rtype: PublicKey

   .. method:: getCollateralTokenAccountPda()

      Returns a PDA for the state account having the informations of collateral tokens in the program.

      :returns: The PublicKey of the PDA.
      :rtype: PublicKey

   .. method:: getSbrSOLMintAuthorityPda()

      Returns a address for the sbrSOL mint authority in the program.

      :returns: The PublicKey of the sbrSOL mint authority PDA.
      :rtype: PublicKey

   .. method:: getSolAuthorityPda()

      Returns a PDA for the account receiving SOL in the program.

      :returns: The PublicKey of the SOL account's PDA.
      :rtype: PublicKey

   .. method:: getTrvcPda()

      Returns a PDA for the TRVC account in the program.

      :returns: The PublicKey of the TRVC PDA.
      :rtype: PublicKey

   .. method:: getPda(seeds)

      Generates a PDA based on the provided seeds and the program ID.

      :param list seeds: An array of Buffer or Uint8Array objects used as seeds to generate the PDA.
      :returns: The generated PublicKey of the PDA.
      :rtype: PublicKey