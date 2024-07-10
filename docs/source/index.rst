Welcome to SbrSol SDK's documentation!
===================================

**SbrSol** is a npm package for cooks and food lovers
that creates recipes mixing random ingredients.
It pulls data from the `Open Food Facts database <https://world.openfoodfacts.org/>`_
`and offers a *simple* and *intuitive* API.`

Check out the :doc:`usage` section for further information, including
how to :ref:`installation` the project.

.. note::

   This project is under active development.

Addresses
--------
.. csv-table::
   :header: "Program", "Address"
   :widths: 20, 60

   "SbrSol program", "FjpX5Eypy58QCfJqeFGomYpVgCwVs1nDNX6e7wQ4K5zK"
   "NlpStaking program", "GnWzQn3RHABRgbEPRkLKBSvn92R7CJ8fPfcS2fyLZe4q"
   "sbrSOL mint", "Epo9NTG8ZjjxiycgdLYVvNFQM2BZumASPa3mJqkKhPCs"
   "nlp mint", "B8gLyBqHKGW1iHqiuq4X64dF4Fk7eFw3auB3aWNq7wN1"

Modules
-------
.. csv-table::
   :header: "Module", "Description", "Program"
   :widths: 30, 60, 20

   "sbrsol", "This is main class of SbrSol program.", "SbrSol"
   "sbrSolPda", "This module includes the readable functions to return PDAs of SbrSol program", "SbrSol"
   "sbrSolState", "This module includes the readable functions to display data of NlpStaking program.", "SbrSol"
   "sbrSolCBS", "This module includes the writable functions for CBS of SbrSol program", "SbrSol"
   "sbrSolPSM", "This module includes the writable functions for PSM of SbrSol program", "SbrSol"
   "sbrSolAdmin", "This module includes the writable functions for Admin of SbrSol program", "SbrSol"
   "liquidate", "This module includes the writable functions for Liquidate of SbrSol program", "SbrSol"
   "nlpstaking", "This module includes the writable functions of NlpStaking program", "NlpStaking"
   "nlpstakingPda", "This is instance of SbrSol program", "NlpStaking"
   "nlpstakingState", "This is instance of SbrSol program", "NlpStaking"

Contents
--------

.. toctree::
   :maxdepth: 2

   usage
   methods/index
