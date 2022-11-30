class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :song_id, :user_id
end
