class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :date_of_birth, :age, :profile_pic_url, :pronouns, :bio
end
