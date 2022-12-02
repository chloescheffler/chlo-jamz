class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :artist
      t.string :url
      t.string :album_url
      t.belongs_to :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
