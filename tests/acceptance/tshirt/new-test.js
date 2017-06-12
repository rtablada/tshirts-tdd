import { test } from 'qunit';
import moduleForAcceptance from 'tshirts/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | tshirt/new');

test('visiting /tshirts/new', (assert) => {
  visit('/tshirts/new');

  andThen(() => {
    assert.equal(currentURL(), '/tshirts/new');
  });
});

test('link to new page from index', (assert) => {
  visit('/tshirts');
  click(testSelector('link-tshirt-new'));

  andThen(() => {
    assert.equal(currentURL(), '/tshirts/new');
  });
});

test('user can create new tshirt', (assert) => {
  visit('/tshirts/new');
  fillIn(testSelector('tshirt-name-input'), 'NASH JS');
  click(testSelector('tshirt-size-s'));
  click(testSelector('tshirt-submit'));

  andThen(() => {
    const savedTshirt = server.db.tshirts[0];

    assert.equal(currentURL(), '/tshirts');
    assert.equal(server.db.tshirts.length, 1);
    assert.equal(savedTshirt.name, 'NASH JS');
    assert.equal(savedTshirt.size, 'S');

    assert.equal(findWithAssert(testSelector('tshirt-name', savedTshirt.id)).text(), 'NASH JS');
    assert.equal(findWithAssert(testSelector('tshirt-size', savedTshirt.id)).text(), 'S');
  });
});
