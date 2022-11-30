class SongPlaylistSerializer < ActiveModel::Serializer
  attributes :id
  has_one :song
  has_one :playlist
end
