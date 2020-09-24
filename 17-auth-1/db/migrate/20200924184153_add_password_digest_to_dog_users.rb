class AddPasswordDigestToDogUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :dog_users, :password_digest, :string
  end
end
