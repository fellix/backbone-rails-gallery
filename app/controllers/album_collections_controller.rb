class AlbumCollectionsController < ApplicationController
  respond_to :js, :json
  
  expose(:album_collections){ AlbumCollection.all }
  
  def index
    respond_with(album_collections)
  end
  
end
