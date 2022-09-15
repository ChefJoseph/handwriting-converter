class User < ApplicationRecord

    has_secure_password
    has_many :documents
    has_many :folders
    # has_one_attached :image
    
    validates :username, presence: true, uniqueness: true
end
