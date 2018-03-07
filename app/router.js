import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', function() {
    this.route('articles-all', { path:'/articles' });
    this.route('article-details', { path:'/articles/:article_id' });
  })
});

export default Router;
