Olsport.AuctionController = Ember.ObjectController.extend({
  // isLotFormShowing: false,
  actions: {
    // showLotForm: function() {
    //   this.set('isLotFormShowing', true);
    // },
    deleteLot: function(lot) {
      this.get('lots').removeObject(lot);
      lot.destroyRecord();
    }
  }
});
