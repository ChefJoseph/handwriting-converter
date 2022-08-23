class DocumentSerializer< ActiveModel::Serializer

  attributes :id, :content, :title, :user_id, :image_url

  def image_url
    if object.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.image, host: "local")
    end
  end
  
end
