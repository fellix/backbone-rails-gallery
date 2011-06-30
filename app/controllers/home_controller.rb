class HomeController < ApplicationController
  respond_to :html
  expose(:collections){ AlbumCollection.all }
  
  def index
    respond_with(collections)
  end

end
