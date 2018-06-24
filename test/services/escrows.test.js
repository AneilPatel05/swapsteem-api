const assert = require('assert');
const app = require('../../src/app');

describe('\'escrows\' service', () => {
  it('registered the service', () => {
    const service = app.service('escrows');

    assert.ok(service, 'Registered the service');
  });
});
