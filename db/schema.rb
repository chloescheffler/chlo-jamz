# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_29_015003) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "description"
    t.bigint "song_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id"], name: "index_comments_on_song_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "playlists", force: :cascade do |t|
    t.string "playlist_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "song_playlists", force: :cascade do |t|
    t.bigint "song_id", null: false
    t.bigint "playlist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["playlist_id"], name: "index_song_playlists_on_playlist_id"
    t.index ["song_id"], name: "index_song_playlists_on_song_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "name"
    t.string "artist"
    t.string "url"
    t.string "album_url"
    t.bigint "genre_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["genre_id"], name: "index_songs_on_genre_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "password_digest"
    t.datetime "date_of_birth"
    t.integer "age"
    t.string "profile_pic_url"
    t.string "pronouns"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "songs"
  add_foreign_key "comments", "users"
  add_foreign_key "song_playlists", "playlists"
  add_foreign_key "song_playlists", "songs"
  add_foreign_key "songs", "genres"
end
