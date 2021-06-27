class DropExcellerInterviews < ActiveRecord::Migration[6.0]
  def change
    drop_table :exceller_interviews
  end
end
