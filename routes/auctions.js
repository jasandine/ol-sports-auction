Olsport.AuctionsRoute = Ember.Route.extend({
  beforeModel: function() {
    this.store.push('auction', {
      id: 1,
      name: "(19)20's Merch",
      location: "Manhattan",
      date: "March 14th, 2015",
      description: "All Gatsby up in here, y'all!"
    });
    this.store.push('auction', {
      id: 2,
      name: "Auction 2",
      location: "Location 2",
      date: "Date 2",
      description: "Description 2"
    });
  },
  model: function() {
    return this.store.find('auction');
  }
});
