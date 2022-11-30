class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :password_digest
      t.string :date_of_birth
      t.integer :age
      t.string :profile_pic_url
      t.string :pronouns
      t.string :bio

      t.timestamps
    end
  end
end
