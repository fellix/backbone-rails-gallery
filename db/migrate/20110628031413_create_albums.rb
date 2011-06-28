class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.references :album_collection
      t.string :artist
      t.string :image
      t.string :large_image
      t.integer :price
      t.string :url
      t.timestamps
    end
  end
end