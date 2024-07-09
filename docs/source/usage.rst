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

Creating recipes
----------------

To get data of cbs user's data,
you can use the ``sdk.sbrsolState.getUserAccountData(authority)`` function:

.. autofunction:: sdk.sbrsolState.getUserAccountData(authority)

Here, the ``authority`` parameter is user's wallet address connected to dapp.

.. autoexception:: sdk.InvalidKindError

For example:

import SbrSol from "sbrsol-sdk";
const sdk = SbrsolSDK.load({
   cluster,
   provider
});
const userAccountData = await sdk.sbrsolState.getUserAccountData(wallet_pub);

