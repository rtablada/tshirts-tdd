import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveTshirt(ev) {
      ev.preventDefault();

      const tshirt = this.store.createRecord('tshirt', this.model);

      tshirt.save().then(() => {
        this.transitionToRoute('tshirts.index');
      });
    },
  },
});
