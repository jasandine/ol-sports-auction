Olsport.Router.map(function(){
  this.resource('auctions', {path: '/'});
  this.resource('auction', {path: 'auctions/:auction_id'}, function() {
    this.resource('new-lot');
  });
});
