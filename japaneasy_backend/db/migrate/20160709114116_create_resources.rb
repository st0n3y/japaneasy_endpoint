class CreateResources < ActiveRecord::Migration[5.0]
  def change
    create_table :resources do |t|
      t.text :title
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
