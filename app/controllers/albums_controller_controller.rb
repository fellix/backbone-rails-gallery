class AlbumsControllerController < ApplicationController
  respond_to :js, :json
  
  expose(:collection){ AlbumCollection.find(params[:collection_id]) }
  
  def index
    respond_with collection.albums
  end
  
end
