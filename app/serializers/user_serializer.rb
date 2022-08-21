class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :is_login
end
