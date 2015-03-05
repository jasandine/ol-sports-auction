Olsport.AuctionController = Ember.ObjectController.extend({
  isLotFormShowing: false,
  actions: {
    showLotForm: function() {
      this.set('isLotFormShowing', true);
    }
  }
});
