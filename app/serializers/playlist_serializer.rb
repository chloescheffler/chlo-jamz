class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :song_name, :song_artist
end
