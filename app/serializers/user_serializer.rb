class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_login
end
