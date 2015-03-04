Olsport.AuctionRoute = Ember.Route.extend({
  beforeModel: function() {
    this.store.push('auction', {
      id: 1,
      name: "(19)20's Merch",
      location: "Manhattan",
      date: "March 14th, 2015",
      description: "All Gatsby up in here, y'all!"
    });
  },
  model: function() {
    return this.store.find('auction');
  }
});
