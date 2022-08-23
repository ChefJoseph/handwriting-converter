class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_login

  # def image_url
  #   if object.image.attached?
  #     Rails.application.routes.url_helpers.rails_blob_path(object.image, host: "s3")
  #   end
  # end
end
