class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :song_name
      t.string :song_artist

      t.timestamps
    end
  end
end
