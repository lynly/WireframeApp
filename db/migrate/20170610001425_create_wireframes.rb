class CreateWireframes < ActiveRecord::Migration[5.0]
  def change
    create_table :wireframes do |t|
      t.string :name
      t.integer :user_id
      t.decimal :height

      t.timestamps
    end
  end
end
