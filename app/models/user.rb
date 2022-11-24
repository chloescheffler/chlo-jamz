class User < ApplicationRecord
    has_many :playlists
    has_many :songs, through: :playlists
    has_many :comments 

    validates :username, presence: true
    validates :password, presence: true, length: { in: 6..20 }
    validates :date_of_birth, presence: true
    validates :age, presence: true, numericality: true
    validates :bio, length: { maximum: 500 }

end
