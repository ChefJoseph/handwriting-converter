class CreateDocuments < ActiveRecord::Migration[7.0]
  def change
    create_table :documents do |t|
      t.string :title
      t.string :content
      t.integer :user_id
      t.integer :tag_id
      t.timestamps
    end
  end
end
