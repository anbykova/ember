import Component from '@ember/component';

export default Component.extend({
  init() {
    this.set('showingArticles', this.get('articles'));
    this._super(...arguments)
  },
  isShowingNewObserver: Ember.observer('isShowingNew', function () {
    let completeValue = this.get('isShowingNew');
    let articles = this.get('articles');
    if (completeValue) {
      let showingArticles = articles.filter((article) => {
        return article.get('createdDate');
      });
      this.set('showingArticles', showingArticles);
    } else {
      this.set('showingArticles', this.get('articles'));
    }
  }),
});
