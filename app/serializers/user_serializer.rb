class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :date_of_birth, :age, :profile_pic_url, :pronouns, :bio
end
