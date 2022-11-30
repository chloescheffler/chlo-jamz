class Song < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :song_playlists
    has_many :playlists, through: :song_playlists
    belongs_to :genre

    validates :name, presence: true
    validates :artist, presence: true
end
