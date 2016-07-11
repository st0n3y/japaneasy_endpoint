class AddTypeToResources < ActiveRecord::Migration[5.0]
  def change
    add_column :resources, :medium, :text
  end
end
