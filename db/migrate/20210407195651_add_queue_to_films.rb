class AddQueueToFilms < ActiveRecord::Migration[5.2]
  def change
    add_column :films, :list, :string
  end
end
