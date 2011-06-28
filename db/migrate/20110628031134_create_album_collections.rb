class CreateAlbumCollections < ActiveRecord::Migration
  def change
    create_table :album_collections do |t|
      t.string :title
      t.string :artist
      t.string :image_name
      t.string :years
      t.string :url
      t.timestamps
    end
  end
end