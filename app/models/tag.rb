class Tag < ApplicationRecord
    has_many :taggings
    has_many :documents, through: :taggings
    
   
    end
    validates :name, presence: true, uniqueness: true
end
