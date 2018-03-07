import DS from "ember-data"

export default DS.RESTAdapter.extend({
  host: 'http://localhost:9001',
  primaryKey: 'id'
  // headers: Ember.computed('session.authToken', function() {
  //   return {
  //     "API_KEY": this.get("session.authToken"),
  //     "ANOTHER_HEADER": "Some header value"
  //   };
  // })
})
