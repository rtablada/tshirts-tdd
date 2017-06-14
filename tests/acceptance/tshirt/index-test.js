import { test } from 'qunit';
import moduleForAcceptance from 'tshirts/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';


moduleForAcceptance('Acceptance | tshirt/index');

test('navigate to tshirts from top nav', (assert) => {
  visit('/');
  click(testSelector('nav-link-tshirt'));

  andThen(() => {
    assert.equal(currentURL(), '/tshirts');
  });
});

test('see tshirts', (assert) => {
  server.createList('tshirt', 10);
  visit('/tshirts');

  andThen(() => {
    const tshirtItems = findWithAssert(testSelector('tshirt-item')).toArray();
    const tshirtText = findWithAssert(testSelector('tshirt-text')).toArray();
    const tshirtSize = findWithAssert(testSelector('tshirt-size')).toArray();

    assert.equal(tshirtItems.length, 10);
    assert.deepEqual(tshirtText.map(t => t.innerText), server.db.tshirts.map(t => t.text));
    assert.deepEqual(tshirtSize.map(t => t.innerText), server.db.tshirts.map(t => t.size));
  });
});
