class CreateBeaches < ActiveRecord::Migration[5.0]
  def change
    create_table :beaches do |t|
      t.string :title
      t.string :city
      t.string :state
      t.float :latitude
      t.float :longitude
      t.integer :rating, default: 1, limit: 5

      t.timestamps
    end
  end
end
