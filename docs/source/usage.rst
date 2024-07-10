Usage
=====

.. _installation:

Installation
------------

To use SbrSol sdk, first install it using npm or yarn inside your project:

.. code-block:: console

   $ npm install --save sbrsol-sdk

or

.. code-block:: console

   $ yarn add sbrsol-sdk

Initialization
----------------

To use this sdk in your code, you need to import npm package and create an instance of sdk with solana connection and provider.

For example:

.. literalinclude:: ../examples/init.ts

Fetch data
----------------

There is another example about how to read the data from program using sdk.

.. literalinclude:: ../examples/readable.ts

Build instruction
----------------

There is another example about how to build transaction instructions and sign on transaction using sdk.

.. literalinclude:: ../examples/writable.ts
