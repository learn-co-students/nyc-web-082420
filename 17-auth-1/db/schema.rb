# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_24_184153) do

  create_table "candles", force: :cascade do |t|
    t.string "name"
    t.string "scent"
    t.integer "price"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dog_users", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.integer "age"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "candle_id", null: false
    t.integer "dog_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["candle_id"], name: "index_favorites_on_candle_id"
    t.index ["dog_user_id"], name: "index_favorites_on_dog_user_id"
  end

  add_foreign_key "favorites", "candles"
  add_foreign_key "favorites", "dog_users"
end
