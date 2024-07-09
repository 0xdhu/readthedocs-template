Usage
=====

.. _installation:

Installation
------------

To use SbrSol, first install it using npm or  yarn:

.. code-block:: console

   $ npm install --save sbrsol-sdk

or

.. code-block:: console

   $ yarn add sbrsol-sdk

Creating recipes
----------------

To retrieve a list of random ingredients,
you can use the ``lumache.get_random_ingredients()`` function:

.. autofunction:: lumache.get_random_ingredients

The ``kind`` parameter should be either ``"meat"``, ``"fish"``,
or ``"veggies"``. Otherwise, :py:func:`lumache.get_random_ingredients`
will raise an exception.

.. autoexception:: lumache.InvalidKindError

For example:

>>> import lumache
>>> lumache.get_random_ingredients()
['shells', 'gorgonzola', 'parsley']

