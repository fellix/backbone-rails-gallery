var ShowView = Backbone.View.extend({
  el: $('#main'),
  template: JST["backbone/templates/album_collections/show"],
  collection: null,

  initialize: function(albumCollection){
    _.bindAll(this, 'render');
    this.collection = albumCollection;
    this.collection.bind('all', this.render);
    this.collection.fetch();
  },
  removeFallbacks: function(){
    var query = $('.jstest,.gallery');
    if(query.length){
      query.remove();
    }
  },
  render: function() {
      var sg = this;
      this.removeFallbacks();
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