var AlbumController = Backbone.Router.extend({
  routes: {
      "collection/:album_collection_id/album/:id" : "show",
  },
  
  initialize: function(options) {
  },
  
  show: function(album_collection_id, id){
    var albums = new SingleAlbumCollection(album_collection_id, id);
    var show = new AlbumShowView(albums);
    show.render();
  }
});