import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | articles/article-details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:articles/article-details');
    assert.ok(route);
  });
});
