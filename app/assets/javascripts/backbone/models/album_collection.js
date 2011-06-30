window.AlbumCollection = Backbone.Model.extend({
  url: function(){
		return this.id ? '/collections/'+this.id : '/collections';
	},
	defaults: { album_collection: { 
		title: "nothing",
		artist: "nobody",
		image_name: "",
		years: "Forever",
		url: "www.google.com"
	} },
	
	initialize: function(){
	}
});

window.AlbumCollectionCollection = Backbone.Collection.extend({
	model: AlbumCollection,
	url: '/collections'
});

window.AlbumCollections = new AlbumCollectionCollection;