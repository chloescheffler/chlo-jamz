class CommentSerializer < ActiveModel::Serializer
  attributes :id, :username, :description, :song_id, :user_id, :profile_pic_url
end
