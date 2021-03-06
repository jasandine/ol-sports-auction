Olsport.Lot = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  auction: DS.belongsTo('auction', {async: true}),
  items: DS.hasMany('item', {async: true})
});
