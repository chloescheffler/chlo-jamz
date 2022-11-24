class Comment < ApplicationRecord
    belongs_to :song
    belongs_to :user

    validates :description, length: { maximum: 150 }
end
