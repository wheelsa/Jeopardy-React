class AddScoreToCard < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :score, :string
  end
end
