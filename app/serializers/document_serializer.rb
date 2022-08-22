class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :content, :title, :user_id
end
