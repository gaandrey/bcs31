class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.string :name
      t.text :content
      t.string :photo
      t.text :description
      t.timestamps
    end
  end
end
