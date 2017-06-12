class CreateElements < ActiveRecord::Migration[5.0]
  def change
    create_table :elements do |t|
      t.string :name
      t.integer :wireframe_id
      t.integer :top
      t.integer :left
      t.string :img_src

      t.timestamps
    end
  end
end
