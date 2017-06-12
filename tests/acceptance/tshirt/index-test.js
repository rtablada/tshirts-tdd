import { test } from 'qunit';
import moduleForAcceptance from 'tshirts/tests/helpers/module-for-acceptance';

import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | tshirt/index');

test('user can visit from the nav link', (assert) => {
  visit('/');
  click(testSelector('nav-link-tshirt'));

  andThen(() => {
    assert.equal(currentURL(), '/tshirts');
  });
});
