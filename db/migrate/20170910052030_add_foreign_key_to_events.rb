class AddForeignKeyToEvents < ActiveRecord::Migration[5.1]
  def change
  	add_foreign_key :events, :users
  end
end
