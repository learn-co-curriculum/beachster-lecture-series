class AddPhotoUrlToBeaches < ActiveRecord::Migration[5.0]
  def change
    add_column :beaches, :photo_url, :string
  end
end
