import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:created-date', 'Unit | Transform | created date', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let transform = this.owner.lookup('transform:created-date');
    assert.ok(transform);
  });
});
