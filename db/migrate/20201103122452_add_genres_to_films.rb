class AddGenresToFilms < ActiveRecord::Migration[5.2]
  def change
    add_column :films, :genre, :string
  end
end
