class User < ApplicationRecord
    has_secure_password
    has_many :comments, dependent: :destroy
    has_many :songs, through: :comments

    validates :user_name, presence: true, uniqueness: true
    validates :password, presence: true, length: { in: 6..20 }
    validates :date_of_birth, presence: true
    validates :age, presence: true, numericality: true
    validates :bio, length: { maximum: 500 }
end
