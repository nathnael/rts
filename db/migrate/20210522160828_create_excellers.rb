class CreateExcellers < ActiveRecord::Migration[6.0]
  def change
    create_table :excellers do |t|
      t.string :first_name
      t.string :father_name
      t.string :grandfather_name
      t.integer :position_id
      t.integer :address_id
      t.integer :years_of_experience
      t.integer :recommended_for_id
      t.date :contract_signing_date
      t.integer :employment_type_id
      t.integer :duty_station_id
      t.integer :status_id
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
