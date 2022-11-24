class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :artist
      t.string :url
      t.integer :playlist_id
      t.integer :user_id

      t.timestamps
    end
  end
end
