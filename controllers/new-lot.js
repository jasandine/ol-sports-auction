Olsport.NewLotController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var lot = this.get('model');
      lot.save();

      var controller = this;
      lot.get('auction').then(function(auction) {
        auction.save();
        controller.transitionToRoute('auction', auction);
      });
    }
  }
});
