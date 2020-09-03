class CreateUsersTable < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      # id is automatically added by AR (primary key)
      # t.dataType :attribute_name
      t.string :name
      t.integer :age
      t.integer :ssn
    end
  end
end
