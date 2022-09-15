class FolderSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :documents
end
