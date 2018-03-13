import DS from 'ember-data';

export default DS.Transform.extend({
  serialize: function(deserialized) {
    let d = new Date(deserialized);
    return d.toString();
  },

  deserialize: function(serialized) {
    let d = new Date(serialized);
    let month = d.getMonth();
    let day = d.getDate();
    return `${d.getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }
});
