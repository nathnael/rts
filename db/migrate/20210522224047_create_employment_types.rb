class CreateEmploymentTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :employment_types do |t|
      t.string :name
      t.text :description
      t.integer :created_by
      t.integer :modified_by
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
