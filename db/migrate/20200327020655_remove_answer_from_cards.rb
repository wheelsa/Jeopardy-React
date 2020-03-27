class RemoveAnswerFromCards < ActiveRecord::Migration[6.0]
  def change

    remove_column :cards, :answer, :string
  end
end
