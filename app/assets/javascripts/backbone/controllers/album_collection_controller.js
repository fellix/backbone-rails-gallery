var AlbumCollectionController = Backbone.Controller.extend({
  
  _index:null,
  
  routes: {
    "": "index",
    "collection/:id": "show",
  },
  
  initialize: function(options) {
    this._index = new IndexView();
  },
  
  index: function() {
    this._index.render();
  },
  
  show: function(id){
    var albums = new AlbumsCollection(id);
    var show = new ShowView(albums);
    show.render();
  }
});