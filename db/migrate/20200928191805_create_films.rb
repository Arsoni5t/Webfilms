class CreateFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :films do |t|
      t.string :title, null:false
      t.integer :year, null:false
      t.string :rating, null:false
      t.text :description, null:false

      t.timestamps
    end
    add_index :films, :title
  end
end
