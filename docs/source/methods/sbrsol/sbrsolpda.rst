SbrSolPDA module
==========

The `SbrSolPDA` class provides methods to generate Program Derived Addresses (PDAs) for various purposes within the SbrSol program.

.. class:: SbrSolPDA

   Methods
   -------

   .. method:: getConfigPda()

      Returns the PDA for the program's config account.

      :returns: The PublicKey of the config PDA.
      :rtype: PublicKey

   .. method:: getProgramPda()

      Returns the PDA for the token accounts derived from the program.

      :returns: The PublicKey of the program PDA.
      :rtype: PublicKey

   .. method:: getUserAccountPda(authority)

      Returns the PDA for a user's state account in the program.

      :param PublicKey authority: The authority's public key.
      :returns: The PublicKey of the user's state PDA.
      :rtype: PublicKey