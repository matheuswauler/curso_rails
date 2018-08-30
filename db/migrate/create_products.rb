class CreateProducts < ActiveRecord::Migration

    def change
        create_table :products do |p|
            d.string img, null: false
            d.string name, null: false
            d.string category, null: false
            d.double price, null: false
            d.timestamps  null: false
        end
    end

end