class DocumentSerializer
  include JSONAPI::Serializer
  attributes :id, :content, :title, :user_id, :image, :image_url
end
