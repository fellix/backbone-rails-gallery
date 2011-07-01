window.Album = Backbone.Model.extend({
  url: function(){
		return this.id ? '/collection/'+this.album_collection_id+'/album/'+this.id : '/collection/'+this.album_collection_id+'/albums';
	},
	defaults: { album: {
	  album_collection_id: 0,
		title: "nothing",
		artist: "nobody",
		image: "",
		price: 0.0,
		url: "www.google.com"
	} },
	
	initialize: function(){
	}
});

window.AlbumsCollection = Backbone.Collection.extend({
	model: Album,
	initialize: function(collection_id){
	  this.url = '/collection/'+collection_id+"/albums";
	}
});

window.SingleAlbumCollection = Backbone.Collection.extend({
	model: Album,
	initialize: function(collection_id, album_id){
	  this.url = '/collection/'+collection_id+"/album/"+album_id;
	}
});
