class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :url, :playlist_id, :user_id
end
