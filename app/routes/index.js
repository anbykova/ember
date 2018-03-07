import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel () {
    //this.transitionTo('user-dashboard');
    this.replaceWith('main.articles-all');
  }
});
