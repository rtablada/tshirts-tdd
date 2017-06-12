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

test('user can see existing tshirts', (assert) => {
  server.createList('tshirt', 10);
  visit('/tshirts');

  andThen(() => {
    const listItems = findWithAssert(testSelector('tshirt-list-item')).toArray();
    const tshirtNames = findWithAssert(testSelector('tshirt-name')).toArray();
    const tshirtSizes = findWithAssert(testSelector('tshirt-size')).toArray();
    const tshirts = server.db.tshirts;

    assert.equal(listItems.length, 10,
      'There are ten items in the list because there are 10 in the API');

    assert.deepEqual(tshirtNames.map(el => el.innerText.trim()), tshirts.map(t => t.name));
    assert.deepEqual(tshirtSizes.map(el => el.innerText.trim()), tshirts.map(t => t.size));
  });
});
