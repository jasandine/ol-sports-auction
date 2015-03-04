Olsport.Auction = DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  date: DS.attr(),
  description: DS.attr(),
  lots: DS.hasMany('lot', {async: true})
});
