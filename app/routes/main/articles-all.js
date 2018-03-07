import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import Ember from 'ember';

export default Route.extend({
  model(params) {
    console.log(params);
    return Ember.Object.create({
      articles: this.store.findAll('article')
    });
    // return hash({
    //   articles: this.store.findAll('article')
    // })

    //return this.get('store').findAll('article');
  }
});
