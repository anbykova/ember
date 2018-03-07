import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  actions: {
    showDescription(article) {
      Ember.set(article, 'descriptionAvailable', !Ember.get(article, 'descriptionAvailable'));
    }
  }
});
