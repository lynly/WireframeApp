class CreateElements < ActiveRecord::Migration[5.0]
  def change
    create_table :elements do |t|
      t.string :name
      t.integer :wireframe_id
      t.decimal :top
      t.decimal :left
      t.decimal :width
      t.decimal :height
      t.string :element_type

      t.timestamps
    end
  end
end
