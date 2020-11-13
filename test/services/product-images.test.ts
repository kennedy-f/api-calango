import assert from 'assert';
import app from '../../src/app';

describe('\'productImages\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-images');

    assert.ok(service, 'Registered the service');
  });
});
