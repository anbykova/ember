import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import Ember from 'ember';

export default Route.extend({
  beforeModel (transition) {
    if (!transition.params['main.article-details']) this.replaceWith('main.articles-all');
  }
});
