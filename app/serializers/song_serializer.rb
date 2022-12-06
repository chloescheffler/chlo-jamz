class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :url, :album_url, :genre_id
  has_many :comments
end
