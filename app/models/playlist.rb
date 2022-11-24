class Playlist < ApplicationRecord
    has_many :users
    has_many :songs, through: :users
end
