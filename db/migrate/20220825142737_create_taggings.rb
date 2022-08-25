class CreateTaggings < ActiveRecord::Migration[7.0]
  def change
    create_table :taggings do |t|
      t.integer :tag_id
      t.integer :document_id

      t.timestamps
    end
  end
end
