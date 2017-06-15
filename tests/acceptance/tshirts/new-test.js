import { test } from 'qunit';
import moduleForAcceptance from 'tshirts/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | tshirts/new');

test('navigate from index page', (assert) => {
  visit('/tshirts');
  click(testSelector('link-new'));

  andThen(() => {
    assert.equal(currentURL(), '/tshirts/new');
  });
});

test('create new tshirt', (assert) => {
  visit('/tshirts/new');
  fillIn(testSelector('input-text'), 'Nash JS');
  click(testSelector('input-size', 'S'));
  click(testSelector('submit'));

  andThen(() => {
    const tshirtItems = findWithAssert(testSelector('tshirt-item'));
    const tshirtText = findWithAssert(testSelector('tshirt-text'));
    const tshirtSize = findWithAssert(testSelector('tshirt-size'));

    assert.equal(currentURL(), '/tshirts');
    assert.equal(tshirtItems.length, 1);
    assert.equal(tshirtText.text(), 'Nash JS');
    assert.equal(tshirtSize.text(), 'S');

    assert.equal(server.db.tshirts.length, 1);
    assert.equal(server.db.tshirts[0].text, 'Nash JS');
    assert.equal(server.db.tshirts[0].size, 'S');
  });
});
