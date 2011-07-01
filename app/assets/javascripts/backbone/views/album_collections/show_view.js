var ShowView = Backbone.View.extend({
  el: $('#main'),
  collection: null,

  initialize: function(albumCollection){
    _.bindAll(this, 'render');
    this.collection = albumCollection;
    this.collection.bind('all', this.render);
    this.collection.fetch();
  },
  render: function() {
      $("#gallery").html("");
      this.collection.each(this.addOne);
      return this;
  },
  addOne: function(album){
    if(album.toJSON()['artist']){
      var view = new AlbumListView({model: album});
      this.$("#gallery").append(view.render().el);
    }
  }
  
});

var AlbumListView = Backbone.View.extend({
  template: JST["backbone/templates/album_collections/show"],
  tagName: "div",
  
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
  
});