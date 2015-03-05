Olsport.AuctionController = Ember.ObjectController.extend({
  isLotFormShowing: false,
  // needs: ["new-lot"],
  actions: {
    showLotForm: function() {
      this.set('isLotFormShowing', true);
    },
    // addNewLot: function() {
    //   this.controllerFor('new-lot').send('save');
    // }
  }
});
