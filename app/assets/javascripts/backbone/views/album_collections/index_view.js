var IndexView = Backbone.View.extend({
  el: $("#main"),
  template: JST["backbone/templates/album_collections/index"],
  
  initialize: function(){
    _.bindAll(this, 'render');
    AlbumCollections.bind('all', this.render);
    var result = AlbumCollections.fetch();
  },
  
  render: function(){
    this.removeFallbacks();
    AlbumCollections.each(this.addOne);
    return this;
  },
  removeFallbacks: function(){
    var query = $('.jstest,.gallery');
    if(query.length){
      query.remove();
    }
  },
  addOne: function(album_collection){
    var view = new AlbumView({model: album_collection});
    this.$("#gallery").append(view.render().el);
  }
});

var AlbumView = Backbone.View.extend({
  template: JST["backbone/templates/album_collections/index"],
  tagName: "div",
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
  
});


/*
Backbone_gallery.Views.Album_collections ||= {}

class Backbone_gallery.Views.Album_collections.IndexView extends Backbone.View
  template: JST["backbone/templates/album_collections/index"]
    
  initialize: () ->
    _.bindAll(this, 'addOne', 'addAll', 'render');
    
    @options.album_collections.bind('refresh', this.addAll);
   
  addAll: () ->
    @options.album_collections.each(this.addOne)
  
  addOne: (album_collection) ->
    view = new Backbone_gallery.Views.Album_collections.Album_collectionView({model : album_collection})
    this.$("tbody").append(view.render().el)
       
  render: ->
    $(this.el).html(this.template(album_collections: this.options.album_collections.toJSON() ))
    @addAll()
    
    return this*/