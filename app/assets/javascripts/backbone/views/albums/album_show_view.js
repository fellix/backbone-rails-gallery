var AlbumShowView = Backbone.View.extend({
  el: $("#main"),
  collection: null,
  
  initialize: function(albums){
    _.bindAll(this, 'render');
    this.collection = albums;
    this.collection.bind('all', this.render);
    this.collection.fetch();
  },
  render: function() {
    $("#gallery").html("");
    this.collection.each(this.addOne);
    return this;
  },
  addOne: function(album){
    var view = new AlbumView({model: album});
    this.$("#gallery").append(view.render().el);
  }
  
});

var AlbumView = Backbone.View.extend({
  template: JST["backbone/templates/albums/show"],
  tagName: "div",
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
  
});