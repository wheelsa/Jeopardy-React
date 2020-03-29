class AddViewCardToCard < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :viewCard, :boolean
  end
end
