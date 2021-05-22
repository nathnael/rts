class CreateExcellerAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :exceller_addresses do |t|
      t.integer :exceller_id
      t.integer :address_id
      t.integer :status
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
