import assert from 'assert';
import app from '../../src/app';

describe('\'productCategory\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-category');

    assert.ok(service, 'Registered the service');
  });
});
