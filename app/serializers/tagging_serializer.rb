class TaggingSerializer < ActiveModel::Serializer
  attributes :id, :tag_id, :document_id
end
