class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :tag_id
  has_one :user
end
