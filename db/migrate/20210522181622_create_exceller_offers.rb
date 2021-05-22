class CreateExcellerOffers < ActiveRecord::Migration[6.0]
  def change
    create_table :exceller_offers do |t|
      t.integer :exceller_id
      t.integer :position_id
      t.integer :response
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
