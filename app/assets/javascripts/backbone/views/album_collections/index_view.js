var IndexView = Backbone.View.extend({
  el: $("#main"),
  
  initialize: function(){
    _.bindAll(this, 'render');
    AlbumCollections.bind('all', this.render);
    AlbumCollections.fetch();
  },
  
  render: function(){
    this.removeFallbacks();
    $("#gallery").html("");
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
    var view = new AlbumCollectionView({model: album_collection});
    this.$("#gallery").append(view.render().el);
  }
});

var AlbumCollectionView = Backbone.View.extend({
  template: JST["backbone/templates/album_collections/index"],
  tagName: "div",
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});