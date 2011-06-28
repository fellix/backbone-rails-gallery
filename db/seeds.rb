# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
data = JSON.parse( File.open("#{Rails.root}/db/data.json").read )
data.each do |collection|
  album_collection = AlbumCollection.create! title: collection["title"], artist: collection["artist"], 
    image_name: collection["image"].split("/")[1], years: collection["years"], url: collection["url"]
  if collection["subalbum"]
    collection["subalbum"].each do |subalbum|
      Album.create! artist: subalbum["artist"], image: subalbum["image"].split("/")[1], large_image: subalbum["large_image"].split("/")[1],
        price: subalbum["price"], url: subalbum["url"]
    end
  end
end