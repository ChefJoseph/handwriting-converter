class Document < ApplicationRecord
    has_one_attached :image 
    belongs_to :user
    # do |attachable|
    #     attachable.variant :thumb, resize_to_limit: [100, 100] 
    # end
    # def image_url
    #     Rails.application.routes.url_helpers.url_for(image) if image.attached?
    # end
    
    # validates :image_url, presence: true
    validates :title, presence: true
end
