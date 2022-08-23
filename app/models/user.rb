class User < ApplicationRecord

    has_secure_password
    has_many_attached :image do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 100]
    end
    validates :username, presence: true, uniqueness: true
end
