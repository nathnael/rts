class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :rep_name
      t.integer :address_id
      t.integer :status
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
