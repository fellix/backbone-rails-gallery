class AlbumsController < ApplicationController
  respond_to :js, :json
  
  expose(:collection){ AlbumCollection.find(params[:collection_id]) }
  expose(:album)
  
  def index
    respond_with collection.albums
  end
  
  def show
    respond_with album
  end
  
end
