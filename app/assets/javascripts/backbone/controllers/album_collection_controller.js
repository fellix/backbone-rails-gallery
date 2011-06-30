var AlbumCollectionController = Backbone.Controller.extend({
  _index:null,
  routes: {
      "": "index",
      "collection/:id": "show",
      "subalbum/:id/" : "directphoto",
      "subalbum/:id/:num" : "hashphoto"
  },
  
  initialize: function(options) {
    this._index = new IndexView();
  },
  
  index: function() {
    this._index.render();
  },
  show: function(id){
    
  }
});