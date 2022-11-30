class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :url, :genre_id
end
