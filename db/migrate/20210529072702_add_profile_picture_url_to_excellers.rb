class AddProfilePictureUrlToExcellers < ActiveRecord::Migration[6.0]
  def change
    add_column :excellers, :profile_picture_url, :string
  end
end
