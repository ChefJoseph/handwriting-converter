class Folder < ApplicationRecord
    has_many :documents
    has_many :taggings, through: :documents
    belongs_to :user
end
