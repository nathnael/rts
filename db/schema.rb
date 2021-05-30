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

ActiveRecord::Schema.define(version: 2021_05_30_103704) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "email"
    t.string "postal_code"
    t.string "country"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.string "sub_city"
    t.string "woreda"
    t.string "house_no"
    t.string "home_phone"
    t.string "cell_phone"
    t.string "work_phone"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "street_no"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "rep_name"
    t.integer "address_id"
    t.integer "status"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "duty_stations", force: :cascade do |t|
    t.string "name"
    t.integer "address_id"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "employment_types", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "exceller_assignments", force: :cascade do |t|
    t.integer "exceller_id"
    t.integer "project_id"
    t.integer "skill_id"
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer "status"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "exceller_interviews", force: :cascade do |t|
    t.integer "exceller_id"
    t.integer "interviewer_id"
    t.integer "interview_criteria_id"
    t.integer "score"
    t.text "comment"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "exceller_offers", force: :cascade do |t|
    t.integer "exceller_id"
    t.integer "position_id"
    t.integer "response"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "exceller_skills", force: :cascade do |t|
    t.integer "exceller_id"
    t.integer "skill_id"
    t.integer "proficiency"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "excellers", force: :cascade do |t|
    t.string "first_name"
    t.string "father_name"
    t.string "grandfather_name"
    t.integer "position_id"
    t.integer "address_id"
    t.integer "years_of_experience"
    t.integer "recommended_for_id"
    t.date "contract_signing_date"
    t.integer "employment_type_id"
    t.integer "duty_station_id"
    t.integer "status_id"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.date "dob"
    t.string "profile_picture_url"
  end

  create_table "interview_criteria", force: :cascade do |t|
    t.integer "interview_id"
    t.integer "skill_id"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.decimal "minimum_score"
  end

  create_table "interviews", force: :cascade do |t|
    t.string "name"
    t.integer "position_id"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "description"
  end

  create_table "permissions", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "user_type"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "positions", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "project_requirements", force: :cascade do |t|
    t.integer "skill_id"
    t.integer "amount"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.integer "client_id"
    t.integer "status"
    t.date "start_date"
    t.date "end_date"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "skill_types", force: :cascade do |t|
    t.string "name"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "description"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.integer "skill_type_id"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "description"
  end

  create_table "user_permissions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "permission_id"
    t.integer "created_by"
    t.integer "modified_by"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
