import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: () => faker.lorem.words(2),
  size: () => faker.random.arrayElement([
    'XS', 'S', 'M', 'L', 'XL', 'XXL',
  ]),
});
