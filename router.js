Olsport.Router.map(function(){
  this.resource('auctions', {path: '/'});
  this.resource('auction', {path: 'auction/:auction_id'}, function() {
    this.resource('new-lot');
  });
});
