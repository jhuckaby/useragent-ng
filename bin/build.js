#!/usr/bin/env node

'use strict';

/**
 * Update our definition file.
 */
require('../lib/build').update(function updating(err, data) {
  if (err) {
    console.error('Build unsuccessfull due to reasons');
    console.log(err.message);
    console.log(err.stack);

    return;
  }
  console.log('Successfully fetched and generated new parsers from the internets.');
});
