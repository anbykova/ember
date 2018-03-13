import DS from 'ember-data';

export default DS.Model.extend({
  authorId: DS.attr('string'),
  title: DS.attr('string'),
  imageURL: DS.attr('string'),
  description: DS.attr('string'),
  createdDate: DS.attr('created-date'),
  isNew: DS.attr('boolran')
});
