class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :date_of_birth
      t.integer :age
      t.string :profile_pic_url
      t.string :pronouns
      t.string :bio

      t.timestamps
    end
  end
end
