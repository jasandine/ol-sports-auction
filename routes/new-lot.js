Olsport.NewLotRoute = Ember.Route.extend({
  model: function(params) {
    var auction = this.modelFor('auction');
    var lot = this.store.createRecord('lot');
    auction.get('lots').then(function(lots) {
      lots.pushObject(lot);
    });
    return lot;
  }
});
