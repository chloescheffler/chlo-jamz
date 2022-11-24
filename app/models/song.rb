class Song < ApplicationRecord
    belongs_to :user
    belongs_to :playlist
    has_many :comments

    validates :name, presence: true
    validates :artist, presence: true
end
