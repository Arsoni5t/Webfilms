class CreateQueue < ActiveRecord::Migration[5.2]
  def change
    create_table :queues do |t|
      t.integer :film_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :queues, [:user_id, :film_id], unique: true
  end
end
