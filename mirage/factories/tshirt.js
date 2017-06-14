import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text: () => faker.lorem.words(3),
  size: () => faker.random.arrayElement([
    'S',
    'M',
    'L',
    'XL',
    'XXL',
  ]),
});
