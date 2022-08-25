class TaggingSerializer < ActiveModel::Serializer
  attributes :id, :tag_id, :article_id
end
