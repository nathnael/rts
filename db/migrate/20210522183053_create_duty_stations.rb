class CreateDutyStations < ActiveRecord::Migration[6.0]
  def change
    create_table :duty_stations do |t|
      t.string :name
      t.integer :address_id
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
